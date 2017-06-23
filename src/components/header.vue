<template>
    <header id="navigation">
      <div class="container">
        <div class="row">
          <!-- navigation -->
          <nav>
          <router-link to="/all">
            <button type="button">
              <span></span>
            </button>
            </router-link>
          </nav>
          <!-- brand logo -->
          <div id="brand">
          <h2>Questions 
           <button type="button">
             <span></span>
           </button>
         </h2>
       </div>
       <!-- search-settings -->
       <form  id="search-settings" action="search-settings">
        <label for="my-shelf"><input type="radio" id="my-shelf" name="settings" value="my-shelf" />My shelf</label>
        <label for="all-que"><input type="radio" id="all-que" name="settings" value="All questions" />All questions</label>
        <i>Sort by</i>: <a class="active" href="">recent</a> 
        <i>or</i> <a href="">hot</a>
      </form>
      <!-- search-inputs -->
      <form id="search-inputs">
       <div id="searcher">
        <input type="text" placeholder="Search questions" tabindex="1">
        <!-- Use v-model to search in posts -->
        <!-- <input type="text" v-model="searchString" placeholder="Search questions" tabindex="1"> -->
      </div>
      <button type="submit" tabindex="2" @click="search()">SEARCH</button>
    </form>
  </div>
</div>
</header>
</template>

<script>
export default {
  data () {
    return {}
  }
}

</script>
<style lang="scss">
  @import "../assets/stylesheets/style.scss";
  header#navigation{
    background: white;
    min-height: 160px;
    padding: 50px 0 0 0;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);
    z-index: 9000;

    a{
      color: $que-link;
      font-weight: bold;
      margin: 0 5px;
      &.active{
        color: $que-gray;
        border-bottom: 1px solid $que-gray;
      }
    }

    nav{
      @extend 
      .col-xs-2, .col-xs-offset-1,
      .col-sm-1, .col-sm-offset-0,
      .col-md-1, .col-md-offset-0,
      .col-lg-2, .col-lg-offset-0,
      .pull-left;

      button{
        @extend .btn, .btn-default;
        border-radius: 99px;
        background: white;
        border: 1px solid $que-gray;
        color: #999;
        width: 40px;
        height: 40px;
        padding: 0px;
        margin: 0;
        font-size: 28px;
        line-height: 0px;
        position: relative;
      span{
            background: url(../assets/back.png);
            height: 24px;
            width: 24px;
            position: absolute;
            top:8px;
            left:5px;
          }

      }

    }


    #brand{
      @extend 
      .col-xs-9, 
      .col-sm-5, 
      .col-md-5, 
      .col-lg-5;
      h2{
        margin: 0;
        font-weight: bold;
        text-transform: uppercase;
        button{
          @extend .btn, .btn-primary;
          border-radius: 99px;
          background: #0266b3;
          width: 26px;
          height: 26px;
          padding: 0px;
          margin: 0;
          font-size: 28px;
          line-height: 0px;
          position: relative;
          span{
            background: url(../assets/add.png);
            height: 18px;
            width: 18px;
            position: absolute;
            top:3px;
            left:3px;
          }
        }
      }
    }

    form#search-settings{
      padding-top: 15px;
      @extend .col-xs-12, .col-sm-6, .col-md-5, .col-lg-5;
      label{
        margin: 0 10px;
      }

    }


    form#search-inputs{
      padding: 20px 0;
      @extend 
      .col-xs-10, .col-xs-offset-1, 
      .col-sm-12, .col-sm-offset-0,
      .col-md-12, .col-md-offset-0, 
      .col-lg-12, .col-lg-offset-0;


      #searcher{
       @extend 
       .col-xs-8,  .col-xs-offset-0,
       .col-sm-10, .col-sm-offset-0, 
       .col-md-8,  .col-md-offset-1,
       .col-lg-6,  .col-lg-offset-2;
       padding-right: 20px;

       input[type=text]{
        @extend .form-control;

      }
    }


    button{
      @extend .btn, .btn-default, 
      .col-xs-4, 
      .col-sm-2, 
      .col-md-2, 
      .col-lg-2;
    }
  }

}
</style>
