import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Prototyping',
        description: 'Prototypes are the best and quickest way to get feedback on a design solution. Coming at multiple stages in the design process, they can come in a couple of different forms: Paper prototypes are super quick and rough used to get quick ideas. Clickable prototypes for which I use InVision, linking up wireframes ready for users to test interactions without any visual distractions.'
    },
    {
        icon: <FiLayers />,
        title: 'Full Stack Developement',
        description: 'I found my passion about front-end development when I came to know that I’ve this quality of putting great attention to details. I found that I focus a lot about design. Attention to details is the most important trait of a designer. Talking from the dev perspective, beyond the projects you would be taking part on and all the networking you will develop, the front-end universe could offer contact with fancy technologies.'
    },
    {
        icon: <FiUsers />,
        title: 'Product Management',
        description: 'Having already worked in retail, tourism, IoT, cryptocurrencies, restoration and real estate industries, I tend to oversee the development and delivery of digital products such as websites and software applications. I collaborate with company leaders to develop a product vision and then work closely with engineers and designers to bring the product to market. My education background allowes me to thrive in complex and intense environnements using design, data science and communication to deliver efficient results.'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
