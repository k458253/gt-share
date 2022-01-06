<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>アーティスト名検索結果</title>
        <link rel="stylesheet" type="text/css" href="{{ secure_asset('css/stylesheet.css') }}">
    </head>
    <body>
        @extends('layouts.app')
        @section('content')
        <div class="siteTtl-outer">
            <div class="siteTtl-logo">GTshare</div>
        </div>
        <form class="search-form" method="GET">
            <input class="search-form__input" name="keyword" type="text" placeholder="アーティスト名や曲名を検索"/>
            <button class="search-form__button" type="submit" formaction="/search/artists">アーティスト名検索</button>
            <button class="search-form__button" type="submit" formaction="/search/songs">曲名検索</button>
            <!--<p class="search-form__error" style="color:red">{{ $errors->first("keyword") }}</p>-->
        </form>
        <div class="container">
            <b class="top__artist-name">アーティスト名"{{ $keyword }}"の検索結果</b>
            <div class="list__title">
                <b>アーティスト一覧</b>
                <form action="/artists/create" method="GET">
                    <button class="create__button" type="submit">新規アーティスト追加</button>
                </form>
            </div>
            @foreach ($artists as $artist)
                <div class="artist">
                    <b class="artist__name">
                        <a href="/artists/{{ $artist->id }}">{{ $artist->name }}</a>
                    </b>
                    <small class="artist__post-count">レビュー {{ $artist->getPostCountByArtist() }}件</small>
                </div>
            @endforeach
            <div class="paginate">
                {{ $artists->links() }}
            </div>
            <div class="breadcrumbs">
                <p><a href="/">トップ</a> > 
                アーティスト名検索結果</p>
            </div>
        </div>
        @endsection
    </body>
</html>
