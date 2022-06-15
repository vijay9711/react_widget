import React, { Component } from 'react'
import './faq.css'
class FAQ extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
        this.state = {
            tquestions:[
                {
                    id:1,
                    value: true
                },
                {
                    id:2,
                    value: true
                },
                // {
                //     id:3,
                //     value: true
                // },
                // {
                //     id:4,
                //     value: true
                // },
                // {
                //     id:5,
                //     value: true
                // },
                // {
                //     id:6,
                //     value: true
                // },
                // {
                //     id:7,
                //     value: true
                // },
                // {
                //     id:8,
                //     value: true
                // },
                // {
                //     id:9,
                //     value: true
                // },
                // {
                //     id:10,
                //     value: true
                // },
                // {
                //     id:11,
                //     value: true
                // },
                // {
                //     id:12,
                //     value: true
                // }
            ]
        }
    }
    handleClick = (e, id) => {
        console.log(id)
        let faq = this.state.tquestions;
        faq.map((question)=>{
            if(question.id === id){
                console.log(question.id, 'in if')
                // question.value = !question.value
                var questionDiscription = document.getElementById(`questionDiscription${question.id}`);
                var questionWrapper1 = document.getElementById(`questionWrapper${question.id}`);
                var questionIcon1 = document.getElementById(`questionIcon${question.id}`);
                var questionDetail = document.getElementById(`question${question.id}`);
                // element.classList.add("hide-discription");
                // element.classList.add("show-discription");
                questionDiscription.classList.toggle("expanded");
                questionDetail.classList.toggle('expanded');
                questionIcon1.classList.toggle('expanded');
                questionWrapper1.classList.toggle('expanded');
            }
            else{
                console.log(question.id, 'in else')
                var questionDiscription = document.getElementById(`questionDiscription${question.id}`);
                var questionWrapper1 = document.getElementById(`questionWrapper${question.id}`);
                var questionIcon1 = document.getElementById(`questionIcon${question.id}`);
                var questionDetail = document.getElementById(`question${question.id}`);
                // element.classList.add("hide-discription");
                // element.classList.add("show-discription");
                questionDiscription.classList.remove("expanded");
                questionDetail.classList.remove('expanded');
                questionIcon1.classList.remove('expanded');
                questionWrapper1.classList.remove('expanded');
            }
        })
        this.setState({tquestions: faq});
        console.log(this.state.tquestions)
    }
    render(){
        return(
            <div className='faq-wrapper'>
                <div>
                    <h2 className='faq-title'>FAQs</h2>
                </div>
                <div id='questionWrapper1' className='question-wrapper'>
                    <div id='question1' className='card-wrapper'>
                        <span id='questionIcon1' className='icon'></span>
                        <h1 onClick={(event)=>{this.handleClick(event,1)}} className='question'>1. What are the general guidelines for Wakefit’s No Questions Asked Policy?</h1>
                        <div id='questionDiscription1' className='discription'>
                            <p>Following are the general guidelines for the No Questions Asked Policy:</p>
                            <p>a) Wakefit&rsquo;s No Questions Asked policy becomes applicable from the date of product delivery.</p>
                            <p>b) You can use the No Questions Asked policy if you ordered a wrong size product.</p>
                            <p>c) You can use the No Questions Asked policy in case a wrong product or same product but of different size, color or design was sent to you.</p>
                            <p>d) You can use the No Questions Asked policy in case the product was not as per your expectations (color or quality issues).</p>
                            <p>e) In case you wish to return or replace a product having associated items (pillow cover with bedsheet, extra pillow fillers given separately with Wakefit pillows), then you need to return the associated product as well.</p>
                            <p>f) No Questions Asked policy can only be used to replace the product with the exact same product (same SKUs). In case if you wish to try a different product either from the same category (ex- exchange a bedsheet with a different pattern bedsheet) or other category (ex- exchange a bedsheet with a Sofa) we request you to return the current order and place a new order separately.</p>
                        </div>
                    </div>
                </div>
                {/* 2nd question */}
                <div id='questionWrapper2' className='question-wrapper'>
                    <div id='question2' className='card-wrapper'>
                        <span id='questionIcon2' className='icon'></span>
                        <h1 onClick={(event)=>{this.handleClick(event,2)}} className='question'>2. What are the replacement scenarios under Wakefit’s No Questions Asked policy?</h1>
                        <div id='questionDiscription2' className='discription'>
                            <p>Currently the replacement is available only within the same product of the same design and quantity. It means that if you wish to replace the Wakefit Periwinkle fitted bedsheet, you will be sent only a new Wakefit Periwinkle fitted bedsheet.</p>
                            <p>The option to exchange the product with a new similar product of different size, design or quantity (ex- if you wish to exchange the Wakefit Periwinkle King size fitted bedsheet with the Wakefit Ripple King size fitted bedsheet) or with another product (ex- if you wish to exchange the Wakefit Periwinkle King size fitted bedsheet with a Wakefit Java Coffee Table) is unavailable. In such cases you need to return the original product and then order a new product separately.</p>
                            <p>Lastly, Wakefit reserved the right to deny the return or replacement of products purchased if a customer misuses the No Questions Asked policy in any way. Such scenarios are picked up by Wakefit on a case to case basis at the sole discretion of Wakefit. In case you wish to return or replace a product having associated items (pillow cover with bedsheet, extra pillow fillers given separately with Wakefit pillows), then you need to return the associated product as well.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ;