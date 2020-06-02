<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = ['id'];
    //protected $fillable = ['name', 'address', 'phone']; 
    
    public function invoices(){
        return $this->hasMany(Invoice::class);
    }
}
