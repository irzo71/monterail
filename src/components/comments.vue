<template>
  <div class="contact">
    <ul id="comments">
      <li v-for="comment in comments">
        <div class="flexbox">
          <aside>
            <div class="avatar"><img :src="comment.user_avatar"></div>
            <ul class="info">
              <li><a href="">{{ comment.user_name }}</a></li>
              <li>{{ comment.user_action }} &#8729;</li>
              <li>{{ comment.post_date }}</li>
            </ul>
          </aside>
          <article>
            <ul class="info">
              <li><a href="">{{ comment.user_name }}</a></li>
              <li>{{ comment.user_action }} &#8729;</li>
              <li>{{ comment.post_date }}</li>
            </ul>
            <p> {{ comment.post_content }}</p>
          </article>
          <div class="stats">
            <div class="number-of-votes">
              {{ comment.post_upvotes }}
              <i>upvotes</i></div>
              <div class="votes">
                <div class="upvote" @click="vote('up', comment)"></div>
                <div class="downvote" @click="vote('down', comment)"></div>
              </div>
            </div>
          </div>
          <!-- START // ANSWSERS TEMPLATE -->
          <ul class="anwsers">
            <li v-for="anwser in comment.anwsers">
              <div class="flexbox">
                <aside>
                  <div class="avatar"><img :src="anwser.user_avatar"></div>
                  <ul class="info">
                    <li><a href="">{{ comment.user_name }}</a></li>
                    <li>{{ comment.user_action }} &#8729;</li>
                    <li>{{ comment.post_date }}</li>
                  </ul>
                </aside>
                <article>
                  <ul class="info">
                    <li><a href="">{{ anwser.user_name }}</a></li>
                    <li>{{ anwser.user_action }} &#8729;</li>
                    <li>{{ anwser.post_date }}</li>
                  </ul>
                  <p> {{ anwser.post_content }}</p>
                </article>
                <div class="stats">
                 <div class="number-of-votes">
                   {{ anwser.post_upvotes }}
                   <i>upvotes</i></div>
                   <div class="votes">
                     <div class="upvote" @click="vote('up', anwser)"></div>
                     <div class="downvote" @click="vote('down', anwser)"></div>
                   </div>
                 </div>
               </div>
             </li>
           </ul>
           <!-- END // ANSWSERS TEMPLATE -->
           <div class="actionbox">
            <a href="">GIVE new anwser</a>
          </div>
        </li>
        </ul>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      questions: [ {
        post_author: 'Test'
      }
      ],
      comments: [
        { user_name: 'Theresa',
          user_action: 'commented',
          user_avatar: 'http://www.sbs.com.au/news/sites/sbs.com.au.news/files/styles/thumb_small/public/images/6/m/6May_MAy_800x600.jpg?itok=wN7CDHxN',
          post_date: 'yesterday',
          post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat euismod erat. Nam vitae eros dolor. Mauris id velit lacus. Praesent semper semper dui sit amet vulputate. Cras tristique semper cursus. Suspendisse eleifend nisi sed mauris suscipit, id elementum elit pulvinar. Integer ac lobortis diam. Fusce suscipit consectetur porttitor. Pellentesque pellentesque felis accumsan diam fermentum semper.',
          post_upvotes: 3,
          anwsers: [
            { user_name: 'Andrzej',
              user_action: 'commented',
              user_avatar: 'https://yt3.ggpht.com/-jlGFnL63DLU/AAAAAAAAAAI/AAAAAAAAAAA/tPh8lhki8ho/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
              post_date: 'yesterday',
              post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat euismod erat. Nam vitae eros dolor. Mauris id velit   lacus. Praesent semper semper dui sit amet vulputate. Cras tristique semper cursus. Suspendisse eleifend nisi sed mauris suscipit, id elementum elit pulvinar. Integer ac lobortis diam. Fusce suscipit consectetur porttitor. Pellentesque pellentesque felis accumsan diam fermentum semper.',
              post_upvotes: 3},
            { user_name: 'Hilary',
              user_action: 'commented',
              user_avatar: 'https://voxe.s3.amazonaws.com/candidates/Democrat%20Hillary%20Clinton-100.jpg',
              post_date: 'yesterday',
              post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat euismod erat. Nam vitae eros dolor. Mauris id velit   lacus. Praesent semper semper dui sit amet vulputate. Cras tristique semper cursus. Suspendisse eleifend nisi sed mauris suscipit, id elementum elit pulvinar. Integer ac lobortis diam. Fusce suscipit consectetur porttitor. Pellentesque pellentesque felis accumsan diam fermentum semper.',
              post_upvotes: 1}
          ]
        },
        { user_name: 'Vladimir',
          user_action: 'commented',
          post_date: 'yesterday',
          user_avatar: 'https://www.teaparty.org/wp-content/uploads/2015/02/putin-small-pic.jpg',
          post_content: 'It\'s a historical phenomenon that in 250 years, a nation could move from a colony into the most prosperous nation of the world and the leader of the world. It is indeed an achievement, a tribute to the talent of the American nation, the American people and an optimal political and economic system.',
          post_upvotes: 1
        },
        { user_name: 'Janusz',
          user_action: 'commented',
          post_date: '2 days ago',
          user_avatar: 'http://cdn22.se.smcloud.net/t/photos/t/325744/janusz-korwin-mikke_20248001.jpg',
          post_content: 'Bardzo się cieszyłem, kiedy Chruszczow oświadczył, że Związek Sowiecki w ciągu 25 lat dogoni i przegoni USA. Jest tylko jeden drobiazg. Rozziew między Ameryką a Unią Europejską powiększa się z każdym miesiącem. Chruszczow miał tę przewagę, że dał sobie 25 lat i zdążył umrzeć. Ponadto co roku dowiadywał się z „Prawdy”, że Związek Sowiecki już dogania USA. Umierał szczęśliwy.',
          post_upvotes: 0
        }
      ]
    }
  },
  methods: {
    vote: function (voteType, comment) {
      if (voteType === 'up') {
        comment.post_upvotes++
      } else if (voteType === 'down') {
        if (comment.post_upvotes <= -10) {
          return
        }

        comment.post_upvotes--
      }
    }
  }
}

</script>

<style lang="scss">
  @import "../assets/stylesheets/style.scss";
  ul#comments{
    list-style-type: none;
    margin: 0;
    padding: 0;
    & > li{
     @extend 
     .col-xs-12, 
     .col-sm-12, 
     .col-md-12, 
     .col-lg-12; 
     padding: 0;
     margin: 0 0 35px 0;

     .flexbox{
       box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.1);
       border-bottom: 1px solid #e5e5e5;
       @media (min-width: $screen-sm-min) {
        display:flex;
      }

    }

    aside{
     @extend 
     .col-xs-12, 
     .col-sm-2, 
     .col-md-2, 
     .col-lg-2;
     /* max-width: 90px; */
     order: 1;
     padding: 20px 0;
      @media (max-width: $screen-xs-max) {padding: 15px 0 0 0;}
     background: white;
     .avatar{
      @extend 
      .col-xs-2;
    }
    ul.info{
      @extend 
      .col-xs-10,
      .pull-right,
      .hidden-sm,
      .hidden-md,
      .hidden-lg;
      list-style-type: none;
      padding: 0 20px;
      li{
        display: inline;
        &:nth-child(1){

        }
        &:nth-child(2){
          text-transform: uppercase;
        }
        &:nth-child(3){
          color: black;
        }
      }
    }
  }
  article{
   @extend 
   .col-xs-12, 
   .col-sm-8, 
   .col-md-8, 
   .col-lg-8;
   order: 1;
   background: white;
   border-left: 1px solid #e5e5e5;
   padding-top: 15px;
   ul.info{
    @extend 
    .visible-sm-block,
    .visible-md-block,
    .visible-lg-block;
    list-style-type: none;
    padding: 0 20px;
    li{
      display: inline;
      &:nth-child(1){

      }
      &:nth-child(2){
        text-transform: uppercase;
      }
      &:nth-child(3){
        color: black;
      }
    }
  }
  p{
    padding: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size:12px;
    color: black;
  }
}

}
.stats{
  @extend 
  .col-xs-12, 
  .col-sm-2, 
  .col-md-2, 
  .col-lg-2;
  order: 2;
  background: white;
}
/* Anwsers! */
ul.anwsers{
 @extend 
 .col-xs-11, .col-xs-offset-1, 
 .col-sm-11, .col-sm-offset-1, 
 .col-md-10, .col-md-offset-2, 
 .col-lg-10, .col-lg-offset-2,
 .pull-right;
 list-style-type: none;
 padding: 0;
 margin: 0;
 @media (max-width: $screen-xs-max) {    
  box-shadow: -3px 0px 5px 0px rgba(0,0,0,0.1);
}
}
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
  z-index: 9997!important;
}
}
</style>
