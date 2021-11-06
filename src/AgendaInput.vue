<template>
<body>
    <nav>
        <h1>DHIA FALAH RAHMA <span id="e">WARDANI</span></h1>
       <img src="AKU.jpg" width="215px" height="320px">
        <h2>contact</h2>
        <hr style="border: 1px solid gray;">
        <p><b>Address:</b>
            <br>Kelurahan Patemon RT02 RW01 GunungPati Kota Semarang
        </p>
        <p><b>phone:</b>
            <br>+62 858-0330-3044
        </p>
        <p><b>Email:</b>
            <br>dhiafala@gmail.com
        </p>
        <p><b>Linkedin:</b>
            <br>-
        </p>
        <h2>languages</h2>
        <hr style="border: 1px solid gray;">
        <p>Java<br>Indonesia<br>English<br>korean</p>
        <h2>Hobbies</h2>
        <hr style="border: 1px solid gray;">
        <ul>
            <li>Read a book</li>
            <li>Swimming</li>
            <li>Listening to music</li>
            <li>Dance</li>
        </ul>
    </nav>
    <article>
        <h2>summary</h2>
        <hr style="border: 1px solid gray;">
        <p>Senior web developer specializing in fornt end development. <br>Experenced with all stages of the development
            cycle for <br>dynamic web projects. Well-versed in numerous programming <br>languages including HTML5, PHP
            OOP,
            JavaScript, CSS MySQL. <br>Strong bacground in project management and customer relations.</p>
        <h2>Skill Highlights</h2>
        <hr style="border: 1px solid gray;">
        <ul id="ul">
            <li>Project management</li>
            <li>Strong decision maker</li>
            <li>Complex ptoblem <br>solver</li>
            <li>creative design</li>
            <li>Innovative</li>
            <li>Service-focused</li>
        </ul>
        <h2>Experience</h2>
        <hr style="border: 1px solid gray;">
        <p><b>Web Developer </b>- 09/2015 to 05/2019</p>
        <p><b>Luna Web Design, </b>New York</p>
        <ul>
            <li>Cooperate with designers to create clean interfaces and <br>simpel, intuitive interactions and
                experiences.
            </li>
            <li>Develop project concepts and main tain optimal <br>workflow.</li>
            <li>Work with senior developer to manage large, complex <br>design projects for corporate clients.</li>
            <li>Complete detailed programming and development tasks <br>for front and public and internal websites as
                well
                as <br>chllenging back-end server code.</li>
            <li>Carry out quality assurance tests to discover errors and <br>optimize usablility</li>
        </ul>
        <h2>Education</h2>
        <hr style="border: 1px solid gray;">
        <P>Bacherlor of science: <b>Computer Information Systems </b>- 2014<br><b>Columbia University, </b>NY</P>
        <h2>Certifications</h2>
        <hr style="border: 1px solid gray;">
        <p>PHP Framework (certificate):<b>Zend, Codeigniter, Symfony.</b><br>programming
            languages:<b>JavaScript,HTML5,PHP
                OOP,CSS,<br>SQL,MySQL.</b></p>
    </article>
</body>
</template>
<script>
export default {
  name: "AgendaInput",
  computed: {
    listAgenda() {
      return this.$store.state.listAgenda;
    },
  },
};
</script>