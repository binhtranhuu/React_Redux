import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddStaff from './components/AddStaff';
import AlertInfo from './components/AlertInfo';
import EditStaff from './components/EditStaff';
import Header from './components/Header';
import Search from './components/Search';
import StaffList from './components/StaffList';
import dataStaff from './config';

function App() {
  const [data, setData] = useState([]);
  const isAdd = useSelector(state => state.staff.isAdd);
  const isEdit = useSelector(state => state.staff.isEdit);

  useEffect(() => {
    dataStaff.on("value", staffs => {
      var arrStaff = [];
      staffs.forEach(element => {
        const key = element.key;
        const staff_name = element.val().staff_name;
        const staff_phone = element.val().staff_phone;
        const staff_permission = element.val().staff_permission;

        arrStaff.push({
          id: key,
          staff_name: staff_name,
          staff_phone: staff_phone,
          staff_permission: staff_permission,
        })
      });
      setData(arrStaff);
    })
  }, []);
  return (
    <div className="container my-1">
      {isEdit && <EditStaff />}
      <AlertInfo />
      <Header />
      <Search />
      <div className="row">
        <StaffList
          sendData={data}
        />
        {isAdd && <AddStaff />}
      </div>
    </div>
  );
}

export default App;