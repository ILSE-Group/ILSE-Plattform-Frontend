import './AccountControl.scss';

function AccountControl() {
    // Define the data directly inside the component
    const roomsProgress = [
        { roomID: 0, roomName: "Passwort-Sicherheit", roomProgress: 100 },
        { roomID: 1, roomName: "Cybermobbing", roomProgress: 98 },
        { roomID: 2, roomName: "Phishing", roomProgress: 89 }
    ];

    return (
        <div className='account-control-wrapper'>
            <div className="stats-container">
                {roomsProgress.map((room) => (
                    <div className="stat-row" key={room.roomID}>
                        <span className="stat-label">{room.roomName}</span>
                        <div className="progress-bg">
                            <div className="progress-fill" style={{ width: `${room.roomProgress}%` }}></div>
                        </div>
                        <span className="stat-percent">{room.roomProgress} %</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountControl;