<template>
  <div id="app">
    <div class="container">

      <!-- Static navbar -->
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">CCM</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <b-link to="/" router-tag="li"><a>Home</a></b-link>
              <b-link to="/about" router-tag="li"><a>About</a></b-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <b-link to="/add" router-tag="li"><a>Adicionar Cliente</a></b-link>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>

      <!-- Main component for a primary marketing message or call to action -->
      <router-view></router-view>

    </div> <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
