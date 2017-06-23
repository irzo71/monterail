<template>
	<div class="que-modal"  id="modal-template">
		<div class="overlay"  v-on:click="closeModal">
		</div>
		<div class="body">
			<div class="close" v-on:click="closeModal"><span class="glyphicon glyphicon-remove-circle"></span></div>
			<header>
				<div class="avatar">
					<!-- <img :src="item.user_avatar" :alt="item.user-name" /> -->
					<img src="https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg" />
					<span>
						<a href="users/user-name 'user_id' ">'user_name'</a> 
					</span>
				</div>
				<ul class="info">
					<li><span>'member_for'</span>: '5months',</li>
					<li><span>'last_seen'</span>: 'Saturday afternoon',</li>
					<li><span>'activity_level'</span>: <div class="activity_levels"><div class="muted"></div></div></li>
				</ul>
			</header>
			<article>
				<ul class="headerline">
					<li><div class="arrow-left"><span class="glyphicon glyphicon-menu-left"></span></div></li>
					<li><h1>How it all started</h1></li>
					<li><div class="arrow-right"><span class="glyphicon glyphicon-menu-right"></span></div></li>
				</ul>
				<h4>that's where we have been these 5 months ago</h4>
				<ul class="squares">
					<li><div class="square"><div class="inner"><span>46</span>'peers'</div></div></li>
					<li><div class="square"><div class="inner"><span>29</span>'discussions'</div></div></li>
					<li><div class="square"><div class="inner"><span>19</span>'findings'</div></div></li>
					<li><div class="square"><div class="inner"><span>10</span>'questions'</div></div></li>
				</ul>
				<h4>who joined the platform that same period</h4>
				<div class="full-view">
					<ul class="users-list">
						<li> 
							<div class="avatar"><img src="https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg" /></div>
							<span><a href="users/user-name 'user_id' ">'connected_ids_1'</a></span>
						</li>
						<li> 
							<div class="avatar"><img src="https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg" /></div>
							<span><a href="users/user-name 'user_id' ">'connected_ids_2'</a></span>
						</li>
						<li> 
							<div class="avatar"><img src="https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg" /></div>
							<span><a href="users/user-name 'user_id' ">'connected_ids_3'</a></span>
						</li>
					</ul>
				</div>
				<h4>the hottest discussion these days</h4>
			</article>	
			<footer>
				<div class="avatar"><img src="https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg" /></div>
				<a href="">'user_name'</a> FOUND THE GUARDIAN ARTICLE <br>
				<h3>Vegan diet to stop diabetes progress</h3>	
				<ul class="info">
					<li><span>6</span>peers involved</li>
					<li><span>3</span>related discussion</li>
					<li><span>3</span>conversations</li>
					<li><span>19</span>upvotes</li>
				</ul>		
			</footer>	       
		</div>

	</div>
</template>
<script>
export default {
  data () {
    return {
      showModal: true
    }
  },
  props: {
    modal: {
      showModal: true
    }
  },
  methods: {
    closeModal: function () {
      window.alert('I don\'t know how to close it. How to set var showModal to false')
      this.showModal = !this.showModal
    }
  }
}
</script>
<style lang="scss">
	@import "../assets/stylesheets/style.scss";
	.que-modal{	
		header{
			@extend 
			.col-xs-12, .col-xs-offset-0,
			.col-sm-10, .col-sm-offset-1,
			.col-md-10, .col-md-offset-1,
			.col-lg-10, .col-lg-offset-1;
			padding: 25px 0; 
			.avatar{
				@extend 
				.col-xs-12,
				.col-sm-12,
				.col-md-12,
				.col-lg-12;
				span{
					margin: 0 auto;
					display: table;
					font-size: 24px;
					padding: 15px 0;
				}
				img{
					height: 85px;
					width: 85px;
				}
			}
			ul.info{
				list-style-type: none;
				li{
					@extend 
					.col-xs-12,
					.col-sm-4,
					.col-md-4,
					.col-lg-4;
					padding: 10px 0;
					display: inline;
					color: black;
					span{
						text-transform: uppercase;
						color: $que-gray;
					}
				}
				/* choose activity levels 0, 1, 2 or 3 */
				$activity_levels: 2;
				.activity_levels{
					width: 3*28px;
					height: 25px;
					background: url(../assets/activity_levels.png);
					position: relative;
					overflow:hidden;
					.muted{
						width: (3-$activity_levels)*28px;
						height: 25px;
						background: url(../assets/activity_levels.png);
						filter: grayscale(100%); 
						position: absolute; 
						right: 0;
					}
				}
				
			}
		}
		article{
			@extend 
			.col-xs-12, .col-xs-offset-0,
			.col-sm-10, .col-sm-offset-1,
			.col-md-10, .col-md-offset-1,
			.col-lg-10, .col-lg-offset-1;
			border-top: 1px solid $que-gray;
			padding: 30px 0;
			ul.headerline{
				@extend 
				.col-xs-12,
				.col-sm-12,
				.col-md-12,
				.col-lg-12;
				list-style-type: none;
				display: table;
				padding: 0 0 30px 0;
				li{
					display: table-cell;
					.arrow-left,
					.arrow-right{
						background: $que-gray;
						width: 30px;
						height: 30px;
						border-radius: 30px;
						text-align: center;
						cursor: pointer;
						&:hover{
							background: $que-link;
						}
						span{
							color: white;
							line-height: 30px;
							text-align: center;
						}
					}
					&:first-child{
						float: left;
					}
					&:nth-child(2){
						text-align: center;
						h1{
							color: black;
							font-style: italic;
						}
					}
					&:last-child{
						float: right;
					}
				}
			}
			h4{
				@extend 
				.col-xs-12,
				.col-sm-12,
				.col-md-12,
				.col-lg-12;
				text-transform: uppercase;
				text-align: center;
				font-size: 15px;
				color: $que-darker-gray;
			}
			ul.squares{
				@extend 
				.col-xs-8, .col-xs-offset-2,
				.col-sm-8, .col-sm-offset-2,
				.col-md-8, .col-md-offset-2,
				.col-lg-8, .col-lg-offset-2;
				list-style-type: none;
				display: table;
				padding: 30px 0;
				li{
					display: table-cell;
					@extend 
					.col-xs-6,
					.col-sm-3,
					.col-md-3,
					.col-lg-3;
					div.square{
						width: 90px;
						height: 90px;
						background: $que-lightblue;
						color: black;
						font-style: italic;
						text-align: center;
						div.inner{
							margin: 15px;
							display: table;
							width: 60px;
							height: 60px;
						}
						span{
							display: block;
							font-size: 30px;
							font-style: normal;
							font-weight: bold;
						}
					}
					&:nth-child(1) div.square{transform: rotate(327deg) ;}
					&:nth-child(2) div.square{transform: rotate(351deg) ;}
					&:nth-child(3) div.square{transform: rotate(320deg) ;}
					&:nth-child(4) div.square{transform: rotate(7deg) ;}
					&:nth-child(1) div.square div.inner{transform: rotate(-327deg) ;}
					&:nth-child(2) div.square div.inner{transform: rotate(-351deg) ;}
					&:nth-child(3) div.square div.inner{transform: rotate(-320deg) ;}
					&:nth-child(4) div.square div.inner{transform: rotate(-7deg) ;}
				}
			}
			ul.users-list{
				/* @extend 
				.col-xs-12, .col-xs-offset-0,
				.col-sm-6, .col-sm-offset-3,
				.col-md-6, .col-md-offset-3,
				.col-lg-6, .col-lg-offset-3; */
				list-style-type: none;
				display: table;
				padding: 0 0 30px 0;
				margin: 0 auto;
				li{
					display: table-cell;
					@extend 
					.col-xs-4,
					.col-sm-4,
					.col-md-4,
					.col-lg-4;
					max-width: 100px;
					overflow-x: hidden;
					.avatar{
						margin: 0 auto;
						width: 90px;
						height: 90px;
						padding: 20px;
						background: url(../assets/stripes.png);
						display: table;
					}
					span{
						font-size: 18px;
					}
				}

			}
		}
		footer{
			@extend 
			.col-xs-12,
			.col-sm-12,
			.col-md-12,
			.col-lg-12;
			position: relative;
			background: url(../assets/stripes.png);
			text-align: center;
			padding: 45px 0 35px 0;
			.avatar{
				@include size(100px,100px)	
				position: absolute;
				top: -25px;	
				left: 50%;
				margin-left:-45px!important;
			}
			ul.info{
				@extend 
				.col-xs-12, .col-xs-offset-0,
				.col-sm-12, .col-sm-offset-0,
				.col-md-12, .col-md-offset-0,
				.col-lg-12, .col-lg-offset-0;
				list-style-type: none;
				display: table;
				padding: 0;
				margin: 0;
				li{
					display: table-cell;
					@extend 
					.col-xs-6,
					.col-sm-3,
					.col-md-3,
					.col-lg-3;
					color: black;
					font-style: italic;
					padding: 5px 0;
					span{
						font-style: normal;
						padding: 0 8px;
					}
				}
			}
		}

		.overlay {
			position: fixed;
			z-index: 9998;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .8);
			cursor: pointer;
		}
		.body {
			@extend 
			.col-xs-12, .col-xs-offset-0,
			.col-sm-12, .col-sm-offset-0,
			.col-md-12, .col-md-offset-0, 
			.col-lg-12,  .col-lg-offset-0;
			position: absolute;
			top: 0;
			z-index: 9999;
			padding: 20px 0px;
			background-color: #fff;
			display: inline-block;
			margin-top: 20px;
		}
		.close{
			position: absolute;
			top: 10px;
			right: 10px;
		}}
		.full-view{
			@extend 
			.col-xs-12,
			.col-sm-12,
			.col-md-12,
			.col-lg-12;
		}
	</style>