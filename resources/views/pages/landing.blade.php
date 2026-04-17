@extends('layouts.app')

@section('content')
  @include('components.hero')
  @include('components.testimonial-simple')
  @include('components.feature-dark-split')
  @include('components.feature-grid-cards')
  @include('components.feature-light-split')
  @include('components.cta-form')
  @include('components.footer')
@endsection
