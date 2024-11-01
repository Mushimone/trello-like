
import  './Card.css';
import Tag from './Tag';

interface CardProps {
    title: string;
    tags: string[];
    content: string;
}

function Card (props: CardProps) {
    return(
        <div className="container-fluid overflow-hidden">
            <div className="card-container">
                <div className="row gx-1 ">
                    {props.tags.map((tag, index) => (
                        <div className="card-tag col-4" key={index}>
                            <Tag tagName={tag}/>
                        </div>
                    ))}
                </div>
                <div className="card-header">
                    <h4>{props.title}</h4>
                </div>
                <div className="card-body">
                    <div>{props.content}</div>
                </div>
            </div>
        </div>

    );

}

export default Card;