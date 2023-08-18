const menubarCSS = `
.mocut-menu {
    /* border: 1px solid yellow; */
    width: 80px;
    /* height: 100%; */
    background: #19162c;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    top: 0;
}

.containerMenu {
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mainLogo {
    width: 3.5em;
    padding-top: 30px;
    margin-top: 5px;
}

.icons {
    width: 2.2em;
    margin-top: 30px;
    padding: 2px;
    filter: invert(100%);
}

.lastMenu {
    margin-top: auto;
}

.lastMenu img {
    width: 2.2em;
    margin-bottom: 50px;
}

.mocut-menu .mainMenu {
    padding-top: 30px;
}

.mocut-menu ul li a{
    position:relative;
}

.mocut-menu ul li input{
    position:relative;
}

.mocut-menu ul li img {
    border: 1px solid tomato;
    cursor: pointer;
    border-radius: .2rem;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
}

.mocut-menu ul li a img:hover {
    
    padding: 3px;
    border-radius: .5rem;
    background: tomato;
}

@media only screen and (max-width: 525px) {
    mocut-menu {
        min-width: 62px;
        width: 62px;
    }
}


// Menubar.File **
.p-10 {
    border: 1px solid red;
  }
  
  .drop-down__button{
    background: linear-gradient(to right,#3d6def, #8FADFE);
    display: inline-block;
    line-height: 40px;
    padding: 0 18px;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.2);
    cursor: pointer;
  }
  
  .drop-down__name {
    font-size: .8em;
    text-transform: uppercase;
    color: #fff;
    font-weight: 800;
    letter-spacing: 2px;
  }
  
  .drop-down {
    position:relative;
  }
  
  .drop-down__menu {
    margin: 0;
    padding: 0 13px;
    list-style: none;
  
  }
  .drop-down__menu-box:before{
    content:'';
  }
  
  .drop-down__menu-box:after{
    content:'';
    background-color: transparent;
  }
  
  .drop-down__menu-box {
    position: absolute;
    width: 150px;
    left: 100%;
    margin-left:.2em;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    transition: all 0.3s;
    visibility: hidden;
    opacity: 0;
    top:0;
  }
  
  .drop-down--active {
    visibility: visible;
    opacity: 1;
    /* margin-top: 15px; */
  }
  
  .drop-down__item {
    font-size: 13px;
    padding: 13px 0;
    text-align: left;
    font-weight: 500;
    color: #909dc2;
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid #e0e2e9;
  }
  
  .drop-down__item:hover .drop-down__item-icon{
    fill: #3d6def;
  }
  
  .drop-down__item:hover{
    color: #3d6def;
  }
  
  .drop-down__item:last-of-type{
    border-bottom: 0;
  }
  
  
  .drop-down--active .drop-down__menu-box{
    visibility: visible;
    opacity: 1;
  /* margin-top: 15px; */
  }
  
  .drop-down__item:before{
    content:'';
    position: absolute;
    width: 3px;
    height: 28px;
    background-color: #3d6def;
    left: -13px;
    top: 50%;
    transform: translateY(-50%);
    display:none;
  }
  
  .drop-down__item:hover:before{
    display:block;
  }
`

export default menubarCSS