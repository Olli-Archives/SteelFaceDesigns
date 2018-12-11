import React, {Component} from 'react';
import {NavMenu, HamburgerMenu} from './index';
import {debounce} from "lodash";
import {PAGE_BREAK_POINT} from "../constants";
import {Intro} from "../Introduction";






export class NavBar extends Component{
    constructor(props){
        super(props);

        this.state={
            filterTerm:'',
            hamburgerMenu:'hide',
            hamFilter:'ham_menu'};

        this.toggleHamburgerMenu=this.toggleHamburgerMenu.bind(this);
        this.hideHamburgerMenu=this.hideHamburgerMenu.bind(this);
            };

     componentDidMount(){
         console.log('component mounted');

         if (window.innerWidth >= PAGE_BREAK_POINT) {
             this.setState({filterTerm: 'desktop'});
             console.log(`on initial mount width>760 filterTerm is being set to desktop`);
         }

         else if (window.innerWidth<PAGE_BREAK_POINT) {
             this.setState({filterTerm: 'mobile'});
             console.log(`on initial mount width<760 mobile nav is being set to true`);
         }
         const resizer = debounce(() => {
             if (window.innerWidth >= PAGE_BREAK_POINT) {
                 this.setState({filterTerm: 'desktop'})
             } else {
                 this.setState({filterTerm: 'mobile'})
             }},200);

         window.addEventListener('resize', resizer
         );
     }

     toggleHamburgerMenu() {
         if(this.state.hamburgerMenu === "hide"){
             this.setState({hamburgerMenu: "show"});
         }else
         {
             this.setState({hamburgerMenu:"hide"});
         }
         console.log(this.state.hamburgerMenu)
     }
     hideHamburgerMenu(){
         console.log("hiding ham menu");
         this.setState({hamburgerMenu:"hide"});
     }



    render(){

        return(
            <div className='z_me'>
               <NavMenu
                   searchTerm={this.state.filterTerm}
                   onClickHamburgerButton={this.toggleHamburgerMenu}
               />
                {
                    this.state.hamburgerMenu === 'show' && this.state.filterTerm === 'mobile'?
                    <HamburgerMenu
                        filterTerm={this.state.hamFilter}
                        onClickSelection={this.hideHamburgerMenu}
                    /> : null
                }
                { this.state.filterTerm === 'mobile' && this.state.hamburgerMenu === 'hide' || this.state.filterTerm === 'desktop'?
                    <Intro/>:null
                }
            </div>
        )
    }
}