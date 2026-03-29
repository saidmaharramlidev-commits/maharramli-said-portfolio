'use client'



import Navbar from "@/components/Navbar"
import Image from "next/image"
import Me from "@/public/me.jpg"



import { FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Box, Button, CircularProgress, createTheme, TextField, ThemeProvider, Tooltip } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { formScheme } from "../formScheme";
import { setFormLoading, setFormSubmitted } from "@/redux/counterSlice";
import emailjs from "@emailjs/browser";
import { RootState } from "@/redux/store";




export function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color='inherit' />
        </Box>
    );
}



const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    // Input text color
                    "& .MuiInputBase-input": {
                        color: "#ffffff",
                    },

                    // Label color
                    "& .MuiInputLabel-root": {
                        color: "#ffffff",
                    },

                    // Label when focused
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#ffffff",
                    },

                    // Border default
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },

                    // Border hover
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },

                    // Border focused
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                    },
                },
            },
        },
    },
});



















function page() {



    const dispatch = useDispatch()
    const { formLoading, isFormSubmitted } = useSelector((state: RootState) => state.counter)



    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            message: "",
        },
        validationSchema: formScheme,
        onSubmit: async (values, { resetForm }) => {
            try {
                dispatch(setFormLoading(true))

                await emailjs.send(
                    "service_1aqxvhr",
                    "template_3rr9ppl",
                    values,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC
                )

                dispatch(setFormSubmitted(true))
                resetForm()

            } catch (error) {
                console.error(error)
            } finally {
                dispatch(setFormLoading(false))
                setTimeout(() => {
                    dispatch(setFormSubmitted(false))
                }, 3000)
            }
        }
    })

























    return (
        <div id="mainContactPage">
            <Navbar />


            <div className="contact-wrapper">

                <div className="left-contact-wrapper">
                    <h1 className="text-white">Let’s Work Together</h1>
                    <p>Have a project in mind or a question? Feel free to reach out.</p>



                    <div id='contact-form'>
                        <ThemeProvider theme={theme}>

                            <form onSubmit={formik.handleSubmit} id='textFields'>
                                <TextField
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    label="Name" type='text' sx={{ width: "90%" }}
                                    error={formik.touched.name && Boolean(formik.errors.name)} />


                                <TextField
                                    name='surname'
                                    value={formik.values.surname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                                    label="Surname" type='text' sx={{ width: "90%" }} />


                                <TextField
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    onBlur={formik.handleBlur}
                                    label="Email" type='email' sx={{ width: "90%" }} />

                                <TextField
                                    name='message'
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    rows={4} multiline
                                    label="Message"
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    type='text'
                                    sx={{ width: "90%" }} />

                                <Button
                                    id='ctaOfContact'
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: "white", color: "black" }}
                                >
                                    {formLoading ? (
                                        <CircularIndeterminate />
                                    ) : isFormSubmitted ? (
                                        <span style={{ color: "green" }}>Form successfully sent</span>
                                    ) : (
                                        "Submit Form"
                                    )}
                                </Button>
                            </form>


                        </ThemeProvider>

                    </div>


                </div>



                <div className="intro-card-wrapper">
                    <div className="photo-wrapper">
                        <Image className="pictureOfMe" loading='eager' src={Me} alt="Picture" />


                    </div>
                    <span className="text-gray-300 pt-4 emailIntro" >saidmaharramlidev@gmail.com</span>

                    <div className="social-media-wrapper w-full flex gap-3 flex-wrap justify-center mt-4.5">

                        <Tooltip title='Instagram'>
                            <Link href={'https://www.instagram.com/developer_said/'} className="social-media center">
                                <FaInstagram className="social-media-icon" />
                            </Link>

                        </Tooltip>

                        <Tooltip title='Github'>
                            <Link href={'https://github.com/saidmaharramlidev-commits'} className="social-media center">
                                <FaGithub className="social-media-icon" />
                            </Link>

                        </Tooltip>
                        <Tooltip title='Linkedin'>
                            <Link href={'https://www.linkedin.com/in/said-maharramli-4b561b3b8/'} className="social-media center">
                                <FaLinkedin className="social-media-icon" />
                            </Link>

                        </Tooltip>
                        <Tooltip title='Fiverr'>
                            <Link href={'https://www.fiverr.com/sellers/saidmaharramli/edit'} className="social-media center">
                                <TbBrandFiverr className="social-media-icon" />
                            </Link>

                        </Tooltip>



                    </div>
                </div>


















            </div>

        </div>
    )
}

export default page