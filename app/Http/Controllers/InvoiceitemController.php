<?php

namespace App\Http\Controllers;

use App\Invoiceitem;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class InvoiceitemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Invoiceitem::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $invoiceitem = Invoiceitem::create($request->all());
        return $invoiceitem;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Invoiceitem  $invoiceitem
     * @return \Illuminate\Http\Response
     */
    public function show(Invoiceitem $invoiceitem)
    {
        return $invoiceitem;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Invoiceitem  $invoiceitem
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoiceitem $invoiceitem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Invoiceitem  $invoiceitem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoiceitem $invoiceitem)
    {
        $invoiceitem->update($request->all());
        return $invoiceitem;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Invoiceitem  $invoiceitem
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoiceitem $invoiceitem)
    {
        $invoiceitem->delete();
        return new JsonResponse(true);
    }
}
