<template>
  <ul class="nav nav-pills">
    <li><router-link to="/summary">Summary</router-link></li>
    <!-- dodawanie active class -->
    <router-link to="/" tag="li" active-class="active" exact><a>Training</a></router-link>
    <router-link to="/workout" tag="li" active-class="active"><a>Workout</a></router-link>
  </ul>
</template>
