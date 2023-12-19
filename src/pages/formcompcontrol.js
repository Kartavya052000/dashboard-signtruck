import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

const FormComponentsControl = () => {
  const initialFields = {
    Name: 'John Doe',
    Email: 'john@example.com',
    Phone: '123-456-7890',
    Website: 'www.example.com',
    'Which Side?': 'Left',
    'Number of Days?': '7',
    'How long on sign truck?': '2 days',
    'Do you have any design?': 'Yes',
    'Available location': 'Location A',
    'Preferred location': 'Location B',
  };

  const [fields, setFields] = useState({});
  const [originalFields, setOriginalFields] = useState(initialFields);
  const [editMode, setEditMode] = useState({
    Name: false,
    Email: false,
    Phone: false,
    Website: false,
    WhichSide: false,
    NumberofDays: false,
    Howlongonsigntruck: false,
    Doyouhaveanydesign: false,
    Availablelocation: false,
    Preferredlocation: false,
  });
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    dateRange: '',
    day: '',
    truckData: '',
    haveDesign: '',
    availableLocation: '',
    preferredLocation: '',
  });

  useEffect(() => {
    // Define the API endpoint URL
    // const apiUrl = 'http://localhost:4000/get-forms';
    const apiUrl = 'https://signtruckapi.signtruck.ca/get-forms';


    Axios.get(apiUrl)
      .then((response) => {
        const {
          name,
          email,
          phone,
          website,
          dateRange,
          day,
          truckData,
          haveDesign,
          availableLocation,
          preferredLocation,
        } = response.data.formData[0];
        setForm({
          name: name || '',
          email: email || '',
          phone: phone || '',
          website: website || '',
          dateRange: dateRange || '',
          day: day || '',
          truckData: truckData || '',
          haveDesign: haveDesign || '',
          availableLocation: availableLocation || '',
          preferredLocation: preferredLocation || '',
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (field) => {
    setOriginalFields({ ...form });
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [field]: true,
    }));
  };

  const showSuccessAlert = (icon,mess) => {
    Swal.fire({
      icon: icon,
      title: mess,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      showConfirmButton: false,
      timer: 2000, // Adjust the time the alert stays visible (in milliseconds)
    });
  };

  const handleSave = (event) => {
    event.preventDefault();

    console.log('Saving form:', form);

    // Make a POST request to update the form data in the API
    // const apiUrl = 'http://localhost:4000/update-form';
    // const apiUrl = 'http://160.153.49.101/update-form';
    // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/update-form';
    const apiUrl = 'https://signtruckapi.signtruck.ca/update-form';



    Axios.post(apiUrl, form)
      .then((response) => {
        console.log('Response from server:', response.data);
        // Handle the successful response if needed
        handleSuccess("Fields Updated Successfully");

      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        handleError("Internal Server Error")
        console.error('Error updating data:', error);
      });

    // Toggle editMode for all fields
    setEditMode((prevEditMode) => {
      const updatedMode = {};
      Object.keys(prevEditMode).forEach((field) => {
        updatedMode[field] = false;
      });
      return updatedMode;
    });
  };

  const handleCancel = () => {
    setForm({ ...originalFields });
    setEditMode((prevEditMode) => {
      const updatedMode = {};
      Object.keys(prevEditMode).forEach((field) => {
        updatedMode[field] = false;
      });
      return updatedMode;
    });
  };
  const handleError = (err) =>{
    showSuccessAlert("error",err)

    };
    const handleSuccess = (msg) =>{
        showSuccessAlert("success",msg)
    }
  return (
    <>
      <div className='manageForm_sec'>
        <div className='sec_ttl'>
          <h2>Booking Form Control</h2>
        </div>
        <div className='manage_Form'>
          <div className='cst_card'>
            <div className='cst_cardBody'>
            <ul className='formLabel_list'>
                {/* name */}
                <li>
                  {editMode.Name ? (
                    <>
                      <input
                        type='text'
                        value={form.name}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, name: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.name}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Name')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* email */}
                <li>
                  {editMode.Email ? (
                    <>
                      <input
                        type='email'
                        value={form.email}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, email: event.target.value }))
                        }
                      />
                      <button type='button' className='btn_danger actionBtn' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.email}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Email')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* phone */}
                <li>
                  {editMode.Phone ? (
                    <>
                      <input
                        type='number'
                        value={form.phone}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, phone: event.target.value }))
                        }
                      />
                      <button type='button' className='btn_danger actionBtn' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.phone}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Phone')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* website */}
                <li>
                  {editMode.Website ? (
                    <>
                      <input
                        type='text'
                        value={form.website}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, website: event.target.value }))
                        }
                      />
                      <button type='button' className='btn_danger actionBtn' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.website}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Website')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* side */}
                <li>
                  {editMode.WhichSide ? (
                    <>
                      <input
                        type='text'
                        value={form.truckData}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, truckData: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.truckData}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('WhichSide')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* days */}
                <li>
                  {editMode.NumberofDays ? (
                    <>
                      <input
                        type='text'
                        value={form.day}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, day: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.day}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('NumberofDays')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* how long duration */}
                <li>
                  {editMode.Howlongonsigntruck ? (
                    <>
                      <input
                        type='text'
                        value={form.dateRange}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, dateRange: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.dateRange}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Howlongonsigntruck')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* design */}
                <li>
                  {editMode.Doyouhaveanydesign ? (
                    <>
                      <input
                        type='text'
                        value={form.haveDesign}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, haveDesign: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.haveDesign}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Doyouhaveanydesign')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* available location */}
                <li>
                  {editMode.Availablelocation ? (
                    <>
                      <input
                        type='text'
                        value={form.availableLocation}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, availableLocation: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.availableLocation}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Availablelocation')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* prefered location */}
                <li>
                  {editMode.Preferredlocation ? (
                    <>
                      <input
                        type='text'
                        value={form.preferredLocation}
                        // onChange={(e) => handleInputChange('Name', e.target.value)}
                        onChange={(event) =>
                            setForm((prevNavbar) => ({ ...prevNavbar, preferredLocation: event.target.value }))
                        }
                      />
                      <button type='button' className='actionBtn btn_danger' onClick={handleCancel}>
                        <i className='fa fa-times'></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <label>{form.preferredLocation}</label>
                      <button type='button' className='actionBtn btn_success' onClick={() => handleEditClick('Preferredlocation')}>
                        <i className='fa fa-pencil'></i>
                      </button>
                    </>
                  )}
                </li>
                {/* Repeat similar structure for other fields */}
                <li>
                  <button type='button' className='btn btn_success' onClick={handleSave}>
                    Save
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponentsControl;
