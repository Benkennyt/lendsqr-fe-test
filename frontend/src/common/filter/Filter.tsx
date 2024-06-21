import { useEffect, useRef, useState } from 'react';
import './Filter.scss'
import ArronDownIcon from '../../assets/svg/dropdown2.svg';
import CalenderIcon from '../../assets/svg/calender.svg';
import BackIcon from '../../assets/svg/back.svg';
import useWindowResize from '../../hooks/useWindowResize';
import { ErrorMessage, Field, Form, Formik } from 'formik';

interface FilterProps {
    handleFilter: () => void;
}

const initialValues = {
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
};

const Filter = (props: FilterProps) => {
    const { handleFilter } = props;
    const [dateHasValue, setDateHasValue] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const { width } = useWindowResize();



    const checkDateInput = () => {
        if (dateInputRef.current?.value) {
            setDateHasValue(true);
        } else {
            setDateHasValue(false);
        }
    };

    
const toggleDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.click();
    }
  };

    return (
        <div className="filter-page">
            {width! <= 530 && <div onClick={handleFilter} className="back-icon">
                <BackIcon />
            </div>}
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ }) => (
                    <Form>
                        <div className="inpt">
                            <p className="hdn organization">Organization</p>
                            <label htmlFor="organization" className="select">
                                <Field
                                    as="select"
                                    id="organization"
                                    name="organization"
                                    required
                               
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="#">Option 1</option>
                                    <option value="#">Option 2</option>
                                    <option value="#">Option 3</option>
                                </Field>
                                <ArronDownIcon />
                            </label>
                            <ErrorMessage name="organization" component="div" className="error" />
                        </div>

                        <div className="inpt">
                            <p className="hdn">Username</p>
                            <Field type="text" name="username" placeholder="Username" className="input" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>

                        <div className="inpt">
                            <p className="hdn">Email</p>
                            <Field type="email" name="email" placeholder="Email" className="input" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="inpt date">
                            <p className='hdn'>Date</p>
                            <input ref={dateInputRef} type="date" placeholder='Date' id='dateInput' onChange={checkDateInput} />
                            {!dateHasValue && <label htmlFor="dateInput" className="custom-placeholder">Date</label>}
                            <div onClick={toggleDatePicker} className="date-svg">
                                <CalenderIcon />
                            </div>
                        </div>

                        <div className="inpt">
                            <p className="hdn">Phone Number</p>
                            <Field type="text" name="phoneNumber" placeholder="Phone Number" className="input" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>

                        <div className="inpt">
                            <p className="hdn">Status</p>
                            <label htmlFor="status" className="select">
                                <Field
                                    as="select"
                                    id="status"
                                    name="status"
                                    required
                           
                                >
                                    <option value="" disabled >Select</option>
                                    <option value="#">Option 1</option>
                                    <option value="#">Option 2</option>
                                    <option value="#">Option 3</option>
                                </Field>
                                <ArronDownIcon />
                            </label>
                            <ErrorMessage name="status" component="div" className="error" />
                        </div>

                        <div className="reset-filter">
                            <button>Reset</button>
                            <button>Filter</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Filter