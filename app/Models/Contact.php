<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'company_id'
    ];

    public $timestamps = false;

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
