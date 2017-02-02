<?php snippet('header') ?>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
  {{ message }}
</div>




<script type="text/javascript">
	var app = new Vue({
  		el: '#app',
  		data: {
    		message: 'Hello Vue!'
  		}
	})
</script>

<?php snippet('footer') ?>