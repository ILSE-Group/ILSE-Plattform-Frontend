import './StudentList.scss';

import RoomsStatus from '../../RoomsStatusPage/RoomsStatus';


// output the Rooms status for each student
function StudentList() {

    return(
        <div>
            <div className='student-info-wrapper'> {/* onclick open/close roomsstatus-page */}
                <p>Username1</p>
                <RoomsStatus />
            </div>

            <div className='student-info-wrapper'>
                <p>Username2</p>
                <RoomsStatus />
            </div>

            <div className='student-info-wrapper'>
                <p>Username3</p>
                <RoomsStatus />
            </div>

            {/*
                elements just for styling purposes.
                real elements added later with json
            */}
            
        </div>
    );
}

export default StudentList;