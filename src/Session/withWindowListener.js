import React ,{Component} from 'react';
import {PAGE_BREAK_POINT} from "../constants";
import {debounce} from "lodash";



const withWindowListener = (Input) => {


    class WithWindowListener extends Component{
        constructor(props) {
            super(props);
            this.state = {
                window: ''
            };
        }

        componentDidMount() {
            console.log('mounting window size listener');

            if (window.innerWidth >= PAGE_BREAK_POINT) {
                this.setState({window: 'desktop'});
                console.log(`on initial mount width>760 filterTerm is being set to desktop`);
            } else if (window.innerWidth < PAGE_BREAK_POINT) {
                this.setState({window: 'mobile'});
                console.log(`on initial mount width<760 mobile nav is being set to true`);
            }

            const resizer = debounce(() => {
                if (window.innerWidth >= PAGE_BREAK_POINT) {
                    this.setState({window: 'desktop'})
                } else {
                    this.setState({window: 'mobile'})
                }
            }, 200);

            window.addEventListener('resize', resizer
            );
        }

        render() {
            return <Input {...this.props} window={this.state.window}/>
        }

    }
        return WithWindowListener;
};



export default withWindowListener;