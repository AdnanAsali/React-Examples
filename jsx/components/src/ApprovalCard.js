import React from 'react';


const ApprovalCard = (props) =>
{
    console.log(props.children.props);
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={props.children.props.avatar} />
                    <div className="header">
                        {props.children.props.author}
                    </div>
                    <div className="meta">
                        {props.children.props.timeAgo}
                    </div>
                    <div className="description">
                        {props.children.props.content}
                    </div>
                </div>

                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="ui link cards">
        //     <div className="card">
        //         <div className="image">
        //             <img src={props.children.props.avatar} />
        //         </div>
        //         <div className="content">
        //             <div className="header">{props.children.props.author}</div>
                    
        //             <div className="description">
        //             {props.children.props.content}
        //             </div>
        //         </div>
        //         <div className="extra content">
        //             <span className="right floated">
        //             {props.children.props.timeAgo}
        //             </span>
        //             <span>
        //                 <i className="user icon"></i>
        //                 75 Friends
        //             </span>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ApprovalCard;