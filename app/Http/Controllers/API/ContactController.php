<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Http\Resources\CompanyResource;

class contactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::with('company')->get();
        return response([ 'contacts' => ContactResource::collection($contacts), 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lastCompanyId = Company::all()->sortByDesc('id')->first()->id;

        $validated = $request->validate([
            'firstname' => 'required|max:255|string',
            'lastname' => 'required|max:255|string',
            'email' => 'required|max:255|string',
            'company_id'=> "required|between: 1, $lastCompanyId|integer"
        ]);

        if ($validated) {
            $contact = Contact::create($request->all());
            return response(['contact' => new ContactResource($contact), 'message' => 'Created successfully'], 201);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show($id = false)
    {

        if ($id) {
            $contact = Contact::with('company')->where('id', $id)->get();
            $companies = Company::all();
            return response(['contact' => new ContactResource($contact), 'companies' => new CompanyResource($companies), 'message' => 'Retrieved successfully'], 200);
        } else {
            $companies = Company::all();
            return response(['companies' => new CompanyResource($companies), 'message' => 'Retrieved successfully'], 200);
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lastCompanyId = Company::all()->sortByDesc('id')->first()->id;

        $validated = $request->validate([
            'firstname' => 'required|max:255|string',
            'lastname' => 'required|max:255|string',
            'email' => 'required|max:255|string',
            'company_id'=> "required|between: 1, $lastCompanyId|integer"
        ]);

        $contactUpdate = Contact::findOrFail($id);
        $input = $request->all();
        $contactUpdate->fill($input)->save();

        return response(['id' => $id, 'request' => $input, 'message' => 'Update successfully'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Contact::findOrFail($id)->delete();

        return response(['message' => 'Deleted']);
    }
}
