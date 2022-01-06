<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>新規アーティスト追加画面</title>
        <link rel="stylesheet" type="text/css" href="{{ secure_asset('css/stylesheet.css') }}">
    </head>
    <body>
        @extends('layouts.app')
        @section('content')
        <div class="siteTtl-outer">
            <div class="siteTtl-logo">GTshare</div>
        </div>
        <h2>新規アーティスト追加</h2>
        <form action="/artists" method="POST">
            @csrf
            <div class="artist_name">
                <input type="text" name="artist[name]" placeholder="アーティスト名" value="{{ old("artist.name") }}"/>
                <p class="name__error" style="color:red">{{ $errors->first("artist.name") }}</p>
            </div>
            <input type="submit" value="追加"/>
        </form>
        <div class="breadcrumbs">
            <p><a href="/">トップ</a> > 
            新規アーティスト追加</p>
        </div>
        @endsection
    </body>
</html>
