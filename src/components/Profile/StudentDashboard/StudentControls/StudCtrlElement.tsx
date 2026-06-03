import './StudCtrlElement.scss';


interface StudCtrlElemProps {
    studentName: string;
}
function StudentControlElement( { studentName } : StudCtrlElemProps ) {

    return (
        <div className='student-control-wrapper'>
            <p>{studentName}</p>

            <p>Delete</p>

            <p>PasswordReset</p>
        </div>
    );

}

export default StudentControlElement;