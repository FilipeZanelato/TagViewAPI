var usuarios = 
    
    [
      {
        "id": "laverne_jacobi11",
        "first_name": "Primary",
        "last_name": "Christelle",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg"
      },
      {
        "id": "noelia_christiansen",
        "first_name": "Virtual",
        "last_name": "Emory",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg"
      },
      {
        "id": "kevin_heaney",
        "first_name": "Cross-Platform",
        "last_name": "Veda",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/_victa/128.jpg"
      },
      {
        "id": "ulises.rath",
        "first_name": "Haptic",
        "last_name": "Merle",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/peter576/128.jpg"
      },
      {
        "id": "mona_mueller",
        "first_name": "Wireless",
        "last_name": "Michel",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gonzalorobaina/128.jpg"
      },
      {
        "id": "elinor.klein17",
        "first_name": "Auxiliary",
        "last_name": "Berry",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shanehudson/128.jpg"
      },
      {
        "id": "gunnar_gerhold",
        "first_name": "Wireless",
        "last_name": "Savanna",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sydlawrence/128.jpg"
      },
      {
        "id": "ramona_davis74",
        "first_name": "Virtual",
        "last_name": "Cordelia",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/santi_urso/128.jpg"
      },
      {
        "id": "gerald47",
        "first_name": "Digital",
        "last_name": "Jaclyn",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joshhemsley/128.jpg"
      },
      {
        "id": "kieran56",
        "first_name": "Mobile",
        "last_name": "Hettie",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/_victa/128.jpg"
      }
        ];
var canais = [
  {
    "id": "general",
    "name": "Geral",
    "public": true
  },
  {
    "id": "random",
    "name": "Random",
    "public": true
  },
  {
    "id": "javascripty",
    "name": "JS",
    "public": true
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "public": true
  },
  {
    "id": "ajuda",
    "name": "SOS",
    "public": true
  },
  {
    "id": "entrevista",
    "name": "Entrevista",
    "public": true
  }
];

for (var i = 0; i<usuarios.length;i++){
    console.log("ID : "+usuarios[i].id);
    console.log("Name : "+usuarios[i].first_name +" "+ usuarios[i].last_name);
    console.log("Avatar : "+usuarios[i].avatar);
    console.log("---------------------------------------------------------");
}

for (var i = 0; i<canais.length;i++){
    console.log("ID : "+canais[i].id);
    console.log("Name : "+canais[i].name);
    console.log("Public : "+canais[i].public);
    console.log("---------------------------------------------------------");
  }

 /* function Usuario(_id,_name,_avatar){      tentei fazer um objeto usuario com as propriedades mas não consegui depurar todos os erros
      this.id = _id;
      this.name = _name;
      this.avatar = _avatar;

    function getId(){
       return this.id;
      }
    function setId(str){
        this.id = str;
    }
      
      function getName(){
       return this.name;
      }
    function setName(str){
        this.name = str;
    }
      
      function getAvatar(){
       return this.avatar;
      }
    function setAvatar(str){
        this.avatar = str;
    }
      
      function toString(){
          return this.id + "\n " + this.name + "\n " + this.avatar + "\n "+ "--------------------------------------"
      }
  }  

var user = new Usuario()[20];                            
  for (var i = 0; i < usuarios.length; i++) {
      user[i] = new Usuario(usuarios[i].id, usuarios[i].first_name + " " + usuarios[i].last_name, usuarios[i].avatar);
  }
      
  for(var i = 0; i<user.length;i++){
    var cont = 0;
      
      if(i+1 > user.length)
          break;
      
       var u1 = use[i].name;
       var u2 = user[i+1].name;
      
      if(u1.substring(cont,cont+1) < u2.substring(cont,cont+1))
          {
              var u = user[i];
              user[i] = user[i+1];
              user[i+1] = u;
          }
      else
          if(u1.substring(cont,cont+1) == u2.substring(cont,cont+1))
              cont++; 
      
  }
      for (var x = 0; x< user.length;x++)
      {
          console.log(user[x].toString);
      }*/



//---------------------------------------------------------------------------------------------


    



      

