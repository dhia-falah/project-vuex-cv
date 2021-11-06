<template>
    <div>
    <h1 id="img"><img>DHIA FALAH RAHMA WARDANI</h1>

    <div id="bar">
        <h2>profile</h2>
        <hr style="border:1px dotted black;">
        <p><b>NAME</b><br>Dhia Falah Rahma Wardani</p>
        <p><b>DATE OF BIRTH</b><br>06 September 2005</p>
        <p><b>ADDRESS</b><br>Kelurahan Patemon RT02 RW01 GunungPati Kota Semarang</p>
        <p><b>WEBSITE</b><br>-</p>
        <h2>AWARDS</h2>
        <hr style="border:1px dotted black;">
        <p><b>CREATIVE AWARDS</b><br>-</p>
        <p><b>INTERFACE DESIGN</b><br>-</p>
        <h2>CONTACT</h2>
        <hr style="border:1px dotted black;">
        <p><b>HOME NUMBER</b><br>-&#9742;</p>
        <p><b>PHONE NUMBER</b><br>+62 858-0330-3044</p>
        <p><b>EMAIL</b><br>dhiafala@gmail.com</p>
        <h2>SOCIAL</h2>
        <hr style="border:1px dotted black;">
        <p><b>TWITTER</b><br>-</p>
        <p><b>INSTAGRAM</b><br>d-fala06</p>
        <p><b>FACEBOOK</b><br>Dhia Falah</p>
    </div>
    <div id="all">

    <h3>GRAPHIC ARTIST</h3>
    <hr style="border: 1px solid black;">
        <div id="r">
        <h3>WORK EXPERIENCE</h3>
        <hr style="border:1px dotted black;">
        <div id="em">
            <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p><br>
            <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p><br>
            <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p>
            <br>
            <p><b>SENIOR ART DIRECTOR</b><br>Lorem ipsum dolor sit amet <br>consectetur adipisicing elit. 
            </p>
            <p><b>SENIOR ART DIRECTOR</b><br>Lorem ipsum dolor sit amet <br>consectetur adipisicing elit.  
            </p>
            <p><b>SENIOR ART DIRECTOR</b><br>Lorem ipsum dolor sit amet <br>consectetur adipisicing elit. 
            </p>
        </div>
    </div>
    <br><br><br>

        <div id="t">
        <h3>EDUCATION</h3>
        <hr style="border-style: dotted; color:black">
        <div id="as">
            <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
            <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
            <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
            <p><b>UNIVERSITY ART DIRECTOR</b><br>Jakarta, Indonesia</p>
            <p><b>UNIVERSITY ART DIRECTOR</b><br>Jakarta, Indonesia</p>
            <p><b>UNIVERSITY ART DIRECTOR</b><br>Jakarta, Indonesia</p>
        </div>
    </div>
</div>
    </div>

</template>
<script>
export default {
  name: "AgendaShow",
  computed: {
    agenda() {
      return this.$store.state.listAgenda;
    },
  },
};
</script>