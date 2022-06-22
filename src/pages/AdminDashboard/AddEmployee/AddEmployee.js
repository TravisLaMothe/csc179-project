import "./AddEmployee.css"

export default function AddEmployee() {
    return (
        <div className="addEmployee">
          <h1 className="newUserTitle">Add Employee</h1>
          <div className="userShow">
          <form className="newUserForm">
            <div className="userContainer">
            <div className="userLeft">
            <div className="userShow">
            <span className="userUpdateTitle">Personal Info</span>
            <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" placeholder="John Smith" />
            </div>
            <div className="newUserItem">
              <label>Age</label>
              <input type="text" placeholder="25" />
            </div>
            <div className="newUserItem">
              <label>Height</label>
              <input type="text" placeholder="69" />
            </div>
            <div className="newUserItem">
              <label>Weight</label>
              <input type="text" placeholder="130" />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="man" value="Man" />
                <label for="Man">Man</label>
                <input type="radio" name="gender" id="woman" value="Woman" />
                <label for="Woman">Female</label>
                <input type="radio" name="gender" id="transgender" value="Transgender" />
                <label for="Transgender">Transgender</label>
                <input type="radio" name="gender" id="nonbinary" value="NonBinary" />
                <label for="NonBinary">NonBinary</label>
                <input type="radio" name="gender" id="notrespond" value="NotRespond" />
                <label for="NotRespond">NotRespond</label>
              </div>
            </div>
            </div>
            </div>
            </div>

            <div className="userContainer">
            <div className="userRight">
            <div className="userShow">
            <span className="userUpdateTitle">Health Details</span>
            <div className="newUserItem">
                <label>Temperature</label>
                <input type="text" placeholder="98.6" />
            </div>
            <div className="newUserItem">
                <label>Pulse</label>
                <input type="text" placeholder="80" />
            </div>
            <div className="newUserItem">
                <label>Pressure</label>
                <input type="text" placeholder="100" />
            </div>
            <div className="newUserItem">
                <label>Respiration</label>
                <input type="text" placeholder="14" />
            </div>
            <div className="newUserItem">
                <label>Exercise</label>
                <input type="text" placeholder="5" />
            </div>
            <div className="newUserItem">
                <label>Vacation</label>
                <input type="text" placeholder="12" />
            </div>
            <div className="newUserItem">
                <label>Work</label>
                <input type="text" placeholder="20" />
            </div>
            </div>
            </div>
            </div>
            <div className="userRight">
                <button className="newUserButton">Create</button>
            </div>
          </form>
          </div>
        </div>
      );
}