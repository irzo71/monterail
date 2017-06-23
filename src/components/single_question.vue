<template>
  <div class="about" >
  <user-modal v-if="showModal == true"></user-modal>
    <ul id="single-qustion">
      <li v-for="item in items">
       <header>
        <aside>
          <div class="avatar">
            <img :src="item.user_avatar" :alt="item.user_name" v-on:click="showModal = !showModal" />
          </div>
        </aside>
        <main>
          <a href="users/user-name">{{ item.user_name }}</a> 
          IS ASKING: <br>
          <div class="following-header"><a href="">unfollow</a></div>
          <h4><a href="">{{ item.question_title }}</a></h4>
        </main>
      </header>

      <div class="activities">
        <aside>
          <div></div>
        </aside>
      </div>
      <p>{{ item.question_content }}</p>
      <div class="following-article"><a href="">unfollow</a></div>
      <div class="stats">
        <div class="number-of-votes">
          {{ item.post_upvotes }}
          <i>upvotes</i></div>
          <div class="votes">
            <div class="upvote" @click="vote('up', item)"></div>
            <div class="downvote" @click="vote('down', item)"></div>
          </div>
        </div>
        <div class="actionbox">
          <a href="">GIVE new anwser</a>
        </div>
      </li>
    </ul>
    <div class="qustion_status"><span>2</span> peers already answered </div>
    <comments></comments>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      users: [{}],
      items: [
        {
          message: 'Foo',
          post_id: 1,
          user_id: 1,
          user_name: 'Donald',
          user_avatar: 'http://cdn15.se.smcloud.net/t/photos/t/589609/czlowiek-ktory-zatrzymal-trumpa_27500219.jpg',
          question_title: 'Will insulin make my patient gain weight?',
          question_content: 'Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don/’t know what to do. Love!',
          related: 1,
          peers: 12,
          conversations: 5,
          post_upvotes: 2
        }
      ]
    }
  },
  methods: {
   // =========== External database ============
   /* fetchData: function () {
      this.$http.get('http://irzyk.pl/monterail/usersdb.php')
                  .then(response => {
                    this.users = response.data
                    console.log(response.data)
                  })
                  .catch(response => {
                    // Error Handling
                  })
    }, */
    vote: function (voteType, item) {
      if (voteType === 'up') {
        item.post_upvotes++
      } else if (voteType === 'down') {
        if (item.post_upvotes <= -10) {
          return
        }

        item.post_upvotes--
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/stylesheets/style.scss";

  [v-cloak] {
    background: red;
  }

    .qustion_status{
    text-align: center;
    padding: 20px 0;
    color: black;
    font-style: italic;
    span{
      font-style: normal;
      font-weight: bold;
    }
  }

  ul#single-qustion{

    header{
      padding: 0;
      @extend 
      .col-xs-12, 
      .col-sm-12, 
      .col-md-12, 
      .col-lg-12;

      aside{
        @extend 
        .col-xs-2, 
        .col-sm-2, 
        .col-md-2, 
        .col-lg-2;
        padding: 20px 0 0 0;
      }

      main{
        @extend 
        .col-xs-8, 
        .col-sm-10, 
        .col-md-10, 
        .col-lg-10;
        padding: 20px 0;

      }
      
      .following-header{
     @extend 
     .hidden-xs, 
     .col-sm-2, 
     .col-md-2, 
     .col-lg-2;
     display: none;
        float: right;
        display: block;
        a{
          font-weight: bold;
        }

      }
    }
       .following-article{
       @extend 
       .col-xs-6, 
       .hidden-sm, 
       .hidden-md, 
       .hidden-lg;
        float: left;
        padding-left: 10px;
        display: block;
        a{
          font-weight: bold;
        }

      }
   



    li{
      margin-bottom: 30px;

      &:first-child header{
        background: $que-skyblue;
      }


    }

    .activities{
      @extend 
      .hidden-xs, 
      .col-sm-2, 
      .col-md-2, 
      .col-lg-2;
      max-width: 100px;
      min-width: 90px;
      aside{
        @extend 
        .hidden-xs, 
        .col-sm-12, 
        .col-md-12, 
        .col-lg-12;
      }
    }

    p{
     @extend 
     .col-xs-12, 
     .col-sm-8, 
     .col-md-8, 
     .col-lg-8;
     font-family: 'Open Sans', sans-serif;
     font-size:12px;
     color: $que-gray;
     padding: 25px 10px;
   }

   .stats{
    @extend 
    .col-xs-6, 
    .col-sm-2, 
    .col-md-2, 
    .col-lg-2,
    .pull-right;
  }

  .actionbox{
   @extend 
   .col-xs-12, 
   .col-sm-12, 
   .col-md-12, 
   .col-lg-12;
   position: relative;
   a{
    position: absolute;
    width: 180px;
    left:50%;
    bottom: -15px;
    margin-left: -90px;
    height: 30px;
    line-height: 30px;
    border: 1px solid $que-gray;
    text-align: center;
    color: black;
    background: white;
  }
}



}
</style>
