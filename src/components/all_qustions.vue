<template>
  <div class="home">
    <user-modal v-if="showModal == true"></user-modal>
    <ul id="all-questions">
      <li v-for="item in items" >
       <!--  Here's problem with filter. When I use above code, I've error -->
       <!--  <li v-for="item in items | limitBy 1 | filterBy searchString in question_title" >   -->
       <!-- post header -->
       <header>
        <aside>
          <div class="avatar">
            <img :src="item.user_avatar" v-on:click="showModal = !showModal" :alt="item.user_name" /> 
          </div>
        </aside>
        <main>
          <a href="users/user-name">{{ item.user_name }}</a> 
          IS ASKING: <br>
          <h4><router-link to="single">{{ item.question_title }}</router-link></h4>
        </main>
      </header>
      <!-- /post header -->
      <div>
        <ul class="activities">
         <li class="asked">
          <div class="status">asked</div>
        </li>
        <!-- more activites -->
        <router-link to="single"><li v-show="item.activities.length > 5" class="more">
          <span class="number"> 
            {{ item.activities.length }}
          </span>
          <br>
          <div class="status">more <br>activities</div>
        </li></router-link>
        <!-- /more activites -->
        <!-- post -->
        <router-link to="single"><li v-for="activitie in item.activities">
         <div class="avatar">
             <img :src="activitie.user_avatar" :alt="activitie.user_name" :title="activitie.user_name" v-on:click="showModal = !showModal" />
         </div>
         <div class="status">
           {{ activitie.status }}
           <div class="icon"></div>
         </div>     
       </li></router-link>
       <!-- / post -->
     </ul>
   </div>
   <!-- Stats of post -->
   <div class="stats">
    <ul>
      <li>{{ item.related }} <i>related discussion</i></li>
      <li>{{ item.peers }} <i>peers involved</i></li>
      <li>{{ item.conversations }} <i>conversations</i></li>
    </ul>
  </div>
  <!-- Load more posts -->
</li>
<li class="load-more">
  <a v-on:click="showModal = !showModal">load more questions</a>
</li>
</ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      searchString: '',
      items: [
        {
          user_name: 'Donald',
          user_avatar: 'http://cdn15.se.smcloud.net/t/photos/t/589609/czlowiek-ktory-zatrzymal-trumpa_27500219.jpg',
          question_title: 'Will insulin make my patient gain weight?',
          related: 1,
          peers: 12,
          conversations: 5,
          activities: [
            {
              user_name: 'Angela',
              user_avatar: 'https://pbs.twimg.com/media/DCuBvDMUMAAe-Hy.jpg',
              status: 'commented'
            },
            {
              user_name: 'Emmanuel',
              user_avatar: 'https://yt3.ggpht.com/-t-7XZXFQBKM/AAAAAAAAAAI/AAAAAAAAAAA/eVTDWWDr68c/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
              status: 'commented'
            },
            {
              user_name: 'Theresa',
              user_avatar: 'http://www.sbs.com.au/news/sites/sbs.com.au.news/files/styles/thumb_small/public/images/6/m/6May_MAy_800x600.jpg?itok=wN7CDHxN',
              status: 'commented'
            },
            {
              user_name: 'Andrzej',
              user_avatar: 'https://yt3.ggpht.com/-jlGFnL63DLU/AAAAAAAAAAI/AAAAAAAAAAA/tPh8lhki8ho/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
              status: 'commented'
            },
            {
              user_name: 'Kim',
              user_avatar: 'https://yt3.ggpht.com/-RZcmBJC58dE/AAAAAAAAAAI/AAAAAAAAAAA/teN4a3x5fOg/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
              status: 'commented'
            },
            {
              user_name: 'Hilary',
              user_avatar: 'https://voxe.s3.amazonaws.com/candidates/Democrat%20Hillary%20Clinton-100.jpg',
              status: 'commented'
            }
          ]
        },
        {
          user_name: 'Neo',
          user_avatar: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAA1gAAAAJDc4ZDlmODZhLTRjYzUtNGM5Ny04ZjdjLTVhOTAzMDQ5ZGY1Yw.jpg',
          question_title: 'Is it Matrix real?',
          related: 1,
          peers: 12,
          conversations: 5,
          activities: [
            {
              user_name: 'Trinity',
              user_avatar: 'http://images2.fanpop.com/images/photos/5400000/Trinity-Icon-the-matrix-5419359-100-100.jpg',
              status: 'commented'
            },
            {
              user_name: 'Morpheus',
              user_avatar: 'https://cdn.meme.am/images/100x100/4885046.jpg',
              status: 'commented'
            }
          ]
        },
        {
          user_name: 'Walter',
          user_avatar: 'http://www.printsonwood.com/media/catalog/product/cache/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95/H/e/Heisenberg_PRINT2-crop-3x4.jpg.th.jpg',
          question_title: 'pollo hermanos?',
          related: 1,
          peers: 12,
          conversations: 5,
          activities: [
            {
              user_name: 'Jesse',
              user_avatar: 'http://www.printsonwood.com/media/catalog/product/cache/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95/J/e/Jesse_PRINT-crop-3x4.jpg.th.jpg',
              status: 'commented'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getUserData: function () {}
  }
}
</script>
<style lang="scss">
  @import "../assets/stylesheets/style.scss";
  ul#all-questions{
    list-style-type: none;
    padding: 0;

    /* load more */
    li.load-more{
      padding: 40px 20px!important;
      @extend 
      .col-xs-12, 
      .col-sm-12, 
      .col-md-12, 
      .col-lg-12;
      a{
        color: #e1173f;
      }
    }
    /* /load more */

//========================================
/* QUESTION - HEADER */
    header{
      padding: 0;
      @extend 
      .col-xs-12, 
      .col-sm-12, 
      .col-md-9, 
      .col-lg-9;
      background: $que-skyblue;

      aside{
        @extend 
        .col-xs-4, 
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
    }
//========================================
/* QUESTION - ACTIVITIES */

ul.activities{
  @extend 
  .col-xs-6, 
  .col-sm-9, 
  .col-md-9, 
  .col-lg-9;
  list-style-type: none;
  margin: 0 0 20px 0;

  .asked{
    margin: 0;
    background: $que-skyblue;  
    float: left;
    height: 185px;
  }

    .more{
      float: left;
      color: black;
      position: relative;
      background: none;
      .number{
      padding: 30px 0 0 0;
      text-align: center;
      height: 50px;
      position: absolute;
      width: 100%;
      }

    }


  li{
   display: inline-flex;
   position: relative;
   margin: 35px 0 0 9px;
   padding: 20px 0 0 0;
   height:150px;
   max-width:100px!important;
   min-width:90px!important;
   background: #eeeeee;
   text-align: center;
   @media (max-width: $screen-xs-max) {    
    margin-left: 5px;
  }

&:nth-of-type(n+5) {display: none;}

  &:not(:first-child):hover{
    background: darken(#eeeeee, 5%);
  }



}
  .status{
    position: absolute;
    display: block;
    bottom: 0;
    text-align: center;
    width: 90%;
    margin: 5px 5%;
    padding-top: 5px;
    border-top: 1px solid #ccc;
    .icon{
      position: absolute;
      bottom: -10px;
      left:50%;
      margin-left: -5px;
      width: 10px;
      height: 10px;
      background: $que-gray;
      border-radius: 10px;
    }
  }


}
}

/*    //regular activite
    .activitie{
     div{
      height:150px;
      position: relative;
      background: #eeeeee;
      margin: 35px 0 0 10px;
      padding-top: 20px;
      @media (max-width: $screen-xs-max) {    
        margin-left: 5px;
      }
      &:hover{
        background: darken(#eeeeee, 5%);
      }
      .status{
        text-transform: uppercase;
        border-top: 1px solid $que-gray;
      }
    }

    //more activitie


  }*/

  .stats{
    @extend 
    .col-xs-6, 
    .col-sm-3, 
    .col-md-3, 
    .col-lg-3;
    float: right;
  }




</style>
