<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $guarded = ['id'];
    
    public function invoiceitems(){
        return $this->hasMany(Invoice_line::class);
    }

    public function customer(){
        return $this->belongsTo(Customer::class);
    }
}
