<template>
  <div id="app" class="container">
    <div class="row py-4">
      <agenda-input />
      <agenda-show />
    </div>
  </div>
</template>
  <script>
import AgendaInput from "./components/AgendaInput.vue";
import AgendaShow from "./components/AgendaShow.vue";

export default {
  name: "app",
  components: {
    AgendaInput,
    AgendaShow,
  },
};
</script>
<style>
* {box-sizing: border-box;}
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: grey;
}

/*style the header */
header {
    background-color: #666;
    padding: 30px;
    text-align: center;
    font-size: 35px;
    color: white;}

/*create two columns/boxes thst floats next to each other */
nav {
    float: left;
    width: 30%;
    height: 100%; /* only for demonstration, should be removed */
    background:  #ccc;
    padding: 20px;}

/* stlye the list insidde the menu */
nav ul {
    list-style-type: none;
    padding: 0;}
article {
    float: left;
    padding: 20px;
    background-color: white;
    width: 70%;
    height: 100%; 
}

#ul {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
}
#e {
    color: red;
}
* {box-sizing: border-box;}

#bar {
    float: left;
border: 5px solid white;
width: 45%;
    text-align: right;
    background-color: white;
}
h1 {
    color: white;
}
nav ul {
    list-style-type: none;
    padding: 0;}

#all {
    float: left;
    border: 25px solid white;
    width: 55%;
    background-color: white;
}
#em {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

}
#as {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
 
}
#r {
    border: 25px solid rgb(228, 218, 218);
    height: 513px;
    background-color: rgb(228, 218, 218);

}
#t {
    border: 25px solid rgb(228, 218, 218);
    background-color: rgb(228, 218, 218);

}
h2 {
  font-family: 'Times New Roman', Times, serif;
}
h3 {
  font-family: 'Times New Roman', Times, serif;
}
img {
  background-image: url("ehem.jpg");
  background-repeat: no-repeat;
  border-radius: 50px;
  width: 250px;
   height: 325px;
}
#img{
    background-color: rgb(1, 1, 24);
}

</style>
