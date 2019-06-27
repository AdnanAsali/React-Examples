import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => 
{
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    content="gd job" 
                    timeAgo="Today 2:00 PM"
                    avatar={faker.image.avatar()}
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    content="hello peeps" 
                    timeAgo="Yesterday 10:00 AM"
                    avatar={faker.image.avatar()}
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                   author="Ahmad" 
                   content="welcome to my comment" 
                   timeAgo="2h ago"
                   avatar={faker.image.avatar()}
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                      author="Jane"  
                      content="This is a prop going to another text file " 
                      timeAgo="more than 72 weeks ago"
                      avatar={faker.image.avatar()}
                /> 
            </ApprovalCard>


            {/* <CommentDetail 
                author="Sam" 
                content="gd job" 
                timeAgo="Today 2:00 PM"
                avatar={faker.image.avatar()}
            />  */}

            {/* <ApprovalCard 
                author="Alex" 
                content="hello peeps" 
                timeAgo="Yesterday 10:00 AM"
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="Alex" 
                content="hello peeps" 
                timeAgo="Yesterday 10:00 AM"
                avatar={faker.image.avatar()}
            />

            <ApprovalCard  
                author="Ahmad" 
                content="welcome to my comment" 
                timeAgo="2h ago"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Ahmad" 
                content="welcome to my comment" 
                timeAgo="2h ago"
                avatar={faker.image.avatar()}
            /> */}

            {/* <CommentDetail 
                author="Kareem" 
                content="Hi people" 
                timeAgo="7 mins ago"
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="Jane"  
                content="This is a prop going to another text file " 
                timeAgo="more than 72 weeks ago"
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="Liz" 
                content="I am lizi" 
                timeAgo="2ys ago"
                avatar={faker.image.avatar()}
            /> */}
        </div>
    );
};

ReactDOM.render(<App /> , document.querySelector('#root'));

