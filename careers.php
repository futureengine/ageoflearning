<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Age of Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" type="image/x-icon" href="style/images/favicon.png" />
        <link href="style/css/bootstrap.css" rel="stylesheet">
        <link href="style/css/settings.css" rel="stylesheet">
        <link href="style/js/google-code-prettify/prettify.css" rel="stylesheet">
        <link href="style/css/careers.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
        <link href="style/css/color/blue.css" rel="stylesheet">

        <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700italic,700,900,900italic,300italic,300,100italic,100' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400italic,700italic,400,700,300' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300,100' rel='stylesheet' type='text/css'>
        <link href="style/type/fontello.css" rel="stylesheet">
        <!--[if IE 8]>
        <link rel="stylesheet" type="text/css" href="style/css/ie8.css" media="all" />
        <![endif]-->
        <!--[if lt IE 9]>
        <script src="style/js/html5shiv.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="body-wrapper">
        <div id="header" class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn responsive-menu pull-right" data-toggle="collapse" data-target=".nav-collapse"><i class='icon-menu-1'></i></a> <a class="brand" href="index.html"><img src="style/images/logo.png" alt="" /></a>
                    <div class="nav-collapse pull-right collapse">
                        <ul class="nav">
                            <li class="dropdown">
                                <a href="index.html" class="dropdown-toggle js-activated">Company</a>
                                <ul class="dropdown-menu">
                                    <li><a href="about1.html">OUR MISSION</a></li>
                                    <li><a href="about1.html">LEADERSHIP</a></li>
                                    <li><a href="initiatives.html">Educational Access Initiatives </a></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="index.html" class="dropdown-toggle js-activated">ABCMouse.COM</a>
                                <ul class="dropdown-menu">
                                    <li><a href="abcMouse.html">PRODUCTS</a></li>
                                    <li><a href="curriculum.html">Curriculum & Standards</a></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="careers.php" >Careers</a>
                                <ul class="dropdown-menu">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="blog.html" >Blog</a>
                                <ul class="dropdown-menu">
                                    <li></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <!-- .nav-collapse --> 
                </div>
                <!-- .container --> 
            </div>
            <!-- .navbav-inner --> 
        </div>
        <!-- .navbar -->
        <div class="offset"></div>
        <div class="blog no-sidebar">
        <div class="dark-wrapper">
            <div class="container inner">
                <div class="post">
                    <div class="messages">
                        <?php session_start(); ?>
                        <?php if (isset($_SESSION['messages']) && is_array($_SESSION['messages']) && count($_SESSION['messages'])): ?>
                            <div class="alert alert-success">
                            <?php
                                foreach ($_SESSION['messages'] as $message) {
                                    echo '<p>'.$message.'</p>';
                                }
                            ?>
                            </div>
                        <?php endif; ?>
                        <?php if (isset($_SESSION['errors']) && is_array($_SESSION['errors']) && count($_SESSION['errors'])): ?>
                            <div class="alert alert-danger">
                            <?php
                                foreach ($_SESSION['errors'] as $error) {
                                    echo '<p>'.$error.'</p>';
                                }
                            ?>
                            </div>
                        <?php endif; ?>
                        <?php unset($_SESSION['messages']); ?>
                        <?php unset($_SESSION['errors']); ?>
                    </div>


                    <h1 class="section-title">Careers</h1>
                    <figure class="media-wrapper"><img src="style/images/art/careers1.jpg" alt="" /></figure>
                    <p>ABCmouse.com is the global education initiative of Age of Learning, Inc. Our goal is to help build a strong foundation for future academic success by providing a comprehensive and engaging online curriculum that greatly assists young children to succeed in pre–k, kindergarten, early elementary school, and beyond.</p>
                    <p>Age of Learning, Inc. is looking for passionate individuals who can bring their talents to the world of early childhood education. We strive to bring meaningful education into children’s lives every day and are looking for the best and the brightest to help us accomplish this goal.</p>
                    <p>Here at ABCmouse.com, we encourage an open and lively work environment: from our monthly, company-wide birthday celebrations; all-staff field trips to screen the latest animated feature films; to the occasional playful NERF® wars in the studio, team members come to work knowing they can have fun in a highly creative yet productive atmosphere.</p>
                    <p>If you would like to find out more about how you might play a role on our highly productive, dedicated team—all while making a long-term difference in the lives of young children throughout the world—we encourage you to tell us about yourself and how you would like to contribute!</p>
                    <!--/.post--> 
                </div>
                <!-- .container-wrapper --> 
            </div>
            <!-- .dark-wrapper -->
            <div class="light-wrapper">
                <div class="container inner">
                    <div id="comments">
                        <h3 class="section-title">Current Openings</h3>

                        <ol id="singlecomments" class="commentlist jobs-block">
                        </ol>
                        
                        <div id="generic_submit">
                            <div id="dont_see_text">Don’t see a post that you’d like to apply for?<br><strong>Send your resumé for our consideration.</strong></div>
                            <input type="button" value="Submit Resum&eacute;" name="submit" id="submit_button_0" class="submit_resume btn btn-submit bm0 dont_see_submit" />
                            <!-- <div onclick="showSubmissionForm(this.id);" class="submit_resume_button dont_see_submit" id="submit_button_0">
                                <div class="submit_resume_glare"></div>
                                <div class="submit_resume_text">Submit Resum&eacute;<span class="acute_001">ú</span></div>
                            </div> -->
                            <div class="clear"></div>

                            <div id="resume_form_0" class="resume_form">
                                <i title="Close Form" class="close_form_img icon-cancel-circled" id="close_form_0"></i>
                                <form enctype="multipart/form-data" onsubmit="return validateCareerForm(0);" action="php/emailresume.php" method="post" id="form_0">
                                    <input type="hidden" value="Generic" name="job">
                                    <input type="hidden" value="0" name="job_id">
                                    <input type="hidden" value="generic" name="category">

                                    <div class="form_top_row">
                                        <div class="form_top_row_left">
                                            <div class="form_trl_row">
                                                <div class="input_label form_trl_label">Name</div>
                                                <div class="form_trl_input_div">
                                                    <input type="text" value="" name="name" id="name_input_0" class="form_trl_input">
                                                </div>
                                            </div>
                                            <div id="name_error_0" class="error_text form_trl_error">Please enter your name.</div>
                                            <div class="form_trl_row">
                                                <div class="input_label form_trl_label">Email</div>
                                                <div class="form_trl_input_div">
                                                    <input type="text" value="" name="email" id="email_input_0" class="form_trl_input">
                                                </div>
                                            </div>
                                            <div id="email_error_0" class="error_text form_trl_error">Please enter a valid email address.</div>
                                            <div class="form_trl_row">
                                                <div class="input_label form_trl_label">Phone</div>
                                                <div class="form_trl_input_div">
                                                    <input type="text" value="" name="phone" id="phone_input_0" class="form_trl_input">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form_top_row_right">
                                            <div class="input_label form_trr_label">Best time to be contacted</div>
                                            <div class="form_dropdown_div">
                                                <select name="best_time" id="best_name_0" class="form_dropdown">
                                                    <option value="morning">Morning</option>
                                                    <option value="afternoon">Afternoon</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input_label cover_letter_label">Cover Letter</div>
                                    <div class="cover_letter_textarea_div">
                                        <textarea onblur="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" onfocus="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" value="" name="typed_cover_letter" id="cover_letter_textarea_0" class="cover_letter_textarea" style="color: rgb(102, 102, 102);">Type here or upload your cover letter below.</textarea>
                                    </div>
                                    <div class="supported_file_types">
                                        <span class="bold">Supported file types</span> (.pdf, .txt, .rtf, .doc, .docx, .html, .php, .js, .inc, .css).  File size limit is 2MB.
                                    </div>
                                    <div class="cover_letter_input_container file_input_container">
                                        <div class="displayed_div">
                                            <div class="displayed_file_submit btn">
                                                <div class="displayed_cover_letter_text">Upload Cover Letter</div>
                                            </div>
                                            <div class="fake_input_box fake_cover_letter_box" id="cover_letter_0"></div>
                                        </div>
                                        <input type="file" onchange="updateFile(this,'coverLetter');" name="cover_letter" class="cover_letter_input file_input" id="cover_letter_input_0">         
                                        
                                        <div onclick="removeFile(this,'coverLetter');" class="remove_cover_letter remove_file btn" id="remove_cover_letter_0">
                                            <div class="remove_cover_letter_text">Remove Cover Letter</div>
                                        </div>
                                    </div>
                                    <div class="resume_input_container file_input_container">
                                        <div class="displayed_div">
                                            <div class="displayed_file_submit btn">
                                                <div class="displayed_resume_text">Upload Resum&eacute;</span></div>
                                            </div>
                                            <div class="fake_input_box fake_resume_box" id="resume_0"></div>
                                        </div>
                                        <input type="file" onchange="updateFile(this,'resume');" name="resume" class="resume_input file_input" id="resume_input_0">   

                                        <div onclick="removeFile(this,'resume');" class="remove_resume remove_file btn" id="remove_resume_0">
                                            <div class="remove_resume_text">Remove Resum&eacute;</div>
                                        </div>
                                    </div>
                                    <div class="clear"></div>

                                    <div id="cl_resume_error_0" class="cl_resume_error_div">
                                        <div id="cover_letter_error_0" class="error_text cover_letter_error"></div>
                                        <div id="resume_error_0" class="error_text resume_error"></div>
                                    </div>
                                    
                                    <div class="clear"></div>

                                    <div class="salary_request_container">
                                        <div class="input_label salary_request_label">Salary Requirement</div>
                                        <div class="salary_input_div">
                                            <input type="text" value="" name="salary" id="salary_input_0" class="salary_input">
                                        </div>
                                        <div id="salary_error_0" class="error_text salary_error">Please provide a salary requirement.</div>
                                    </div>
                                    <div class="clear"></div>

                                    <!-- <div class="master_submit no_shift_required" id="submit_div_0">
                                        <div class="master_submit_glare"></div>
                                        <div class="master_submit_text">Submit</div>
                                    </div> -->

                                    <input type="submit" value="Submit" class="master_submit_input no_shift_required btn btn-submit bm0" id="submit_0">    
                                </form>
                                <div class="clear"></div>
                                
                            </div>
                        </div>

                            
                        <div id="jobs-block-templates">
                            <!-- used to create new job categories html -->
                            <div class="job-category-template job-category">
                                <div class="job-category" id="%%department%%">
                                    <!-- <div class="user">
                                        <img alt="%%department%%" src="style/images/icon/%%department%%.png" class="avatar" />
                                    </div> -->
                                    <div class="message">
                                        %%jobs%%
                                    </div>
                                </div>
                            </div>

                            <!-- used to create new developers jobs html -->
                            <div class="job-template job">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-%%department%%-%%id%%"><span class="title">%%title%%</span><span class="icon-down-circled-1 pull-right"></span></a>
                                    </div>
                                    <div id="collapse-%%department%%-%%id%%" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            <div class="intro job-section">
                                                %%intro_text%%
                                            </div>
                                            <div class="duties job-section">
                                                <h3>Duties:</h3>
                                                %%duties%%
                                            </div>
                                            <div class="qualifications job-section">
                                                <h3>Qualifications:</h3>
                                                %%qualifications%%
                                            </div>

                                            <input type="button" value="Submit Resum&eacute;" name="submit" id="submit_button_%%id%%" class="submit_resume btn btn-submit bm0" />

                                            <div id="resume_form_%%id%%" class="resume_form">
                                                <i title="Close Form" class="close_form_img icon-cancel-circled" id="close_form_%%id%%"></i>
                                                <form enctype="multipart/form-data" onsubmit="return validateCareerForm(%%id%%);" action="php/emailresume.php" method="post" id="form_%%id%%">
                                                    <input type="hidden" value="%%title%%" name="job">
                                                    <input type="hidden" value="%%id%%" name="job_id">
                                                    <input type="hidden" value="%%department%%" name="category">

                                                    <div class="form_top_row">
                                                        <div class="form_top_row_left">
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Name</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="name" id="name_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="name_error_%%id%%" class="error_text form_trl_error">Please enter your name.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Email</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="email" id="email_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="email_error_%%id%%" class="error_text form_trl_error">Please enter a valid email address.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Phone</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="phone" id="phone_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form_top_row_right">
                                                            <div class="input_label form_trr_label">Best time to be contacted</div>
                                                            <div class="form_dropdown_div">
                                                                <select name="best_time" id="best_name_%%id%%" class="form_dropdown">
                                                                    <option value="morning">Morning</option>
                                                                    <option value="afternoon">Afternoon</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="input_label cover_letter_label">Cover Letter</div>
                                                    <div class="cover_letter_textarea_div">
                                                        <textarea onblur="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" onfocus="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" value="" name="typed_cover_letter" id="cover_letter_textarea_%%id%%" class="cover_letter_textarea" style="color: rgb(102, 102, 102);">Type here or upload your cover letter below.</textarea>
                                                    </div>
                                                    <div class="supported_file_types">
                                                        <span class="bold">Supported file types</span> (.pdf, .txt, .rtf, .doc, .docx, .html, .php, .js, .inc, .css).  File size limit is 2MB.
                                                    </div>
                                                    <div class="cover_letter_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_cover_letter_text">Upload Cover Letter</div>
                                                            </div>
                                                            <div class="fake_input_box fake_cover_letter_box" id="cover_letter_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'coverLetter');" name="cover_letter" class="cover_letter_input file_input" id="cover_letter_input_%%id%%">         
                                                        
                                                        <div onclick="removeFile(this,'coverLetter');" class="remove_cover_letter remove_file btn" id="remove_cover_letter_%%id%%">
                                                            <div class="remove_cover_letter_text">Remove Cover Letter</div>
                                                        </div>
                                                    </div>
                                                    <div class="resume_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_resume_text">Upload Resum&eacute;</span></div>
                                                            </div>
                                                            <div class="fake_input_box fake_resume_box" id="resume_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'resume');" name="resume" class="resume_input file_input" id="resume_input_%%id%%">   

                                                        <div onclick="removeFile(this,'resume');" class="remove_resume remove_file btn" id="remove_resume_%%id%%">
                                                            <div class="remove_resume_text">Remove Resum&eacute;</div>
                                                        </div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div id="cl_resume_error_%%id%%" class="cl_resume_error_div">
                                                        <div id="cover_letter_error_%%id%%" class="error_text cover_letter_error"></div>
                                                        <div id="resume_error_%%id%%" class="error_text resume_error"></div>
                                                    </div>
                                                    
                                                    <div class="clear"></div>

                                                    <div class="salary_request_container">
                                                        <div class="input_label salary_request_label">Salary Requirement</div>
                                                        <div class="salary_input_div">
                                                            <input type="text" value="" name="salary" id="salary_input_%%id%%" class="salary_input">
                                                        </div>
                                                        <div id="salary_error_%%id%%" class="error_text salary_error">Please provide a salary requirement.</div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <!-- <div class="master_submit no_shift_required" id="submit_div_%%id%%">
                                                        <div class="master_submit_glare"></div>
                                                        <div class="master_submit_text">Submit</div>
                                                    </div> -->

                                                    <input type="submit" value="Submit" class="master_submit_input no_shift_required btn btn-submit bm0" id="submit_%%id%%">    
                                                </form>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- template -->
                            <!-- used to create new developers jobs html -->
                            <div class="job-template-developers job">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-%%department%%-%%id%%"><span class="title">%%title%%</span><span class="icon-down-circled-1 pull-right"></span></a>
                                    </div>
                                    <div id="collapse-%%department%%-%%id%%" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            <div class="intro job-section">
                                                %%intro_text%%
                                            </div>
                                            <div class="duties job-section">
                                                <h3>Duties:</h3>
                                                %%duties%%
                                            </div>
                                            <div class="qualifications job-section">
                                                <h3>Qualifications:</h3>
                                                %%qualifications%%
                                            </div>

                                            <input type="button" value="Submit Resum&eacute;" name="submit" id="submit_button_%%id%%" class="submit_resume btn btn-submit bm0" />

                                            <div id="resume_form_%%id%%" class="resume_form">
                                                <i title="Close Form" class="close_form_img icon-cancel-circled" id="close_form_%%id%%"></i>
                                                <form enctype="multipart/form-data" onsubmit="return validateCareerForm(%%id%%);" action="php/emailresume.php" method="post" id="form_%%id%%">
                                                    <input type="hidden" value="%%title%%" name="job">
                                                    <input type="hidden" value="%%id%%" name="job_id">
                                                    <input type="hidden" value="%%department%%" name="category">

                                                    <div class="form_top_row">
                                                        <div class="form_top_row_left">
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Name</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="name" id="name_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="name_error_%%id%%" class="error_text form_trl_error">Please enter your name.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Email</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="email" id="email_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="email_error_%%id%%" class="error_text form_trl_error">Please enter a valid email address.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Phone</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="phone" id="phone_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form_top_row_right">
                                                            <div class="input_label form_trr_label">Best time to be contacted</div>
                                                            <div class="form_dropdown_div">
                                                                <select name="best_time" id="best_name_%%id%%" class="form_dropdown">
                                                                    <option value="morning">Morning</option>
                                                                    <option value="afternoon">Afternoon</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="input_label cover_letter_label">Cover Letter</div>
                                                    <div class="cover_letter_textarea_div">
                                                        <textarea onblur="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" onfocus="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" value="" name="typed_cover_letter" id="cover_letter_textarea_%%id%%" class="cover_letter_textarea" style="color: rgb(102, 102, 102);">Type here or upload your cover letter below.</textarea>
                                                    </div>
                                                    <div class="supported_file_types">
                                                        <span class="bold">Supported file types</span> (.pdf, .txt, .rtf, .doc, .docx, .html, .php, .js, .inc, .css).  File size limit is 2MB.
                                                    </div>
                                                    <div class="cover_letter_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_cover_letter_text">Upload Cover Letter</div>
                                                            </div>
                                                            <div class="fake_input_box fake_cover_letter_box" id="cover_letter_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'coverLetter');" name="cover_letter" class="cover_letter_input file_input" id="cover_letter_input_%%id%%">         
                                                        
                                                        <div onclick="removeFile(this,'coverLetter');" class="remove_cover_letter remove_file btn" id="remove_cover_letter_%%id%%">
                                                            <div class="remove_cover_letter_text">Remove Cover Letter</div>
                                                        </div>
                                                    </div>
                                                    <div class="resume_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_resume_text">Upload Resum&eacute;</span></div>
                                                            </div>
                                                            <div class="fake_input_box fake_resume_box" id="resume_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'resume');" name="resume" class="resume_input file_input" id="resume_input_%%id%%">   

                                                        <div onclick="removeFile(this,'resume');" class="remove_resume remove_file btn" id="remove_resume_%%id%%">
                                                            <div class="remove_resume_text">Remove Resum&eacute;</div>
                                                        </div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div id="cl_resume_error_%%id%%" class="cl_resume_error_div">
                                                        <div id="cover_letter_error_%%id%%" class="error_text cover_letter_error"></div>
                                                        <div id="resume_error_%%id%%" class="error_text resume_error"></div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div class="files_input_container_container file_input_container">
                                                        <div class="files_input_container displayed_div">
                                                            <div class="displayed_files_div">
                                                                <div class="displayed_files_submit btn">
                                                                    <div class="displayed_files_text">Upload Code Samples</div>
                                                                </div>
                                                                <div class="fake_input_box fake_code_samples_box" id="code_samples_%%id%%"></div>
                                                            </div>
                                                            <div class="code_sample_inputs" id="code_sample_inputs_%%id%%">
                                                                <input type="file" onchange="updateCodeSamples('code_sample_inputs_%%id%%');" name="code_samples[]" class="code_sample_input file_input" id="code_sample_0_%%id%%" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="fileList" id="fileList_%%id%%"></div>

                                                        <div class="clear"></div>
                                                        
                                                        <div id="code_samples_error_%%id%%" class="error_text code_samples_error"></div>
                                                        <div id="code_samples_condition_%%id%%" class="supported_file_types code_samples_condition">Please submit code samples without the use of frameworks.</div>
                                                    </div>

                                                    
                                                    <div class="clear"></div>

                                                    <div class="salary_request_container">
                                                        <div class="input_label salary_request_label">Salary Requirement</div>
                                                        <div class="salary_input_div">
                                                            <input type="text" value="" name="salary" id="salary_input_%%id%%" class="salary_input">
                                                        </div>
                                                        <div id="salary_error_%%id%%" class="error_text salary_error">Please provide a salary requirement.</div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <!-- <div class="master_submit no_shift_required" id="submit_div_%%id%%">
                                                        <div class="master_submit_glare"></div>
                                                        <div class="master_submit_text">Submit</div>
                                                    </div> -->

                                                    <input type="submit" value="Submit" class="master_submit_input no_shift_required btn btn-submit bm0" id="submit_%%id%%">    
                                                </form>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- template -->
                            <!-- used to create new developers jobs html -->
                            <div class="job-template-qacs job">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-%%department%%-%%id%%"><span class="title">%%title%%</span><span class="icon-down-circled-1 pull-right"></span></a>
                                    </div>
                                    <div id="collapse-%%department%%-%%id%%" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            <div class="intro job-section">
                                                %%intro_text%%
                                            </div>
                                            <div class="duties job-section">
                                                <h3>Duties:</h3>
                                                %%duties%%
                                            </div>
                                            <div class="qualifications job-section">
                                                <h3>Qualifications:</h3>
                                                %%qualifications%%
                                            </div>

                                            <input type="button" value="Submit Resum&eacute;" name="submit" id="submit_button_%%id%%" class="submit_resume btn btn-submit bm0" />

                                            <div id="resume_form_%%id%%" class="resume_form">
                                                <i title="Close Form" class="close_form_img icon-cancel-circled" id="close_form_%%id%%"></i>
                                                <form enctype="multipart/form-data" onsubmit="return validateCareerForm(%%id%%);" action="php/emailresume.php" method="post" id="form_%%id%%">
                                                    <input type="hidden" value="%%title%%" name="job">
                                                    <input type="hidden" value="%%id%%" name="job_id">
                                                    <input type="hidden" value="%%department%%" name="category">

                                                    <div class="form_top_row">
                                                        <div class="form_top_row_left">
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Name</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="name" id="name_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="name_error_%%id%%" class="error_text form_trl_error">Please enter your name.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Email</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="email" id="email_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="email_error_%%id%%" class="error_text form_trl_error">Please enter a valid email address.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Phone</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="phone" id="phone_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form_top_row_right">
                                                            <div class="input_label form_trr_label">Best time to be contacted</div>
                                                            <div class="form_dropdown_div">
                                                                <select name="best_time" id="best_name_%%id%%" class="form_dropdown">
                                                                    <option value="morning">Morning</option>
                                                                    <option value="afternoon">Afternoon</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="input_label cover_letter_label">Cover Letter</div>
                                                    <div class="cover_letter_textarea_div">
                                                        <textarea onblur="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" onfocus="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" value="" name="typed_cover_letter" id="cover_letter_textarea_%%id%%" class="cover_letter_textarea" style="color: rgb(102, 102, 102);">Type here or upload your cover letter below.</textarea>
                                                    </div>
                                                    <div class="supported_file_types">
                                                        <span class="bold">Supported file types</span> (.pdf, .txt, .rtf, .doc, .docx, .html, .php, .js, .inc, .css).  File size limit is 2MB.
                                                    </div>
                                                    <div class="cover_letter_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_cover_letter_text">Upload Cover Letter</div>
                                                            </div>
                                                            <div class="fake_input_box fake_cover_letter_box" id="cover_letter_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'coverLetter');" name="cover_letter" class="cover_letter_input file_input" id="cover_letter_input_%%id%%">         
                                                        
                                                        <div onclick="removeFile(this,'coverLetter');" class="remove_cover_letter remove_file btn" id="remove_cover_letter_%%id%%">
                                                            <div class="remove_cover_letter_text">Remove Cover Letter</div>
                                                        </div>
                                                    </div>
                                                    <div class="resume_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_resume_text">Upload Resum&eacute;</span></div>
                                                            </div>
                                                            <div class="fake_input_box fake_resume_box" id="resume_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'resume');" name="resume" class="resume_input file_input" id="resume_input_%%id%%">   

                                                        <div onclick="removeFile(this,'resume');" class="remove_resume remove_file btn" id="remove_resume_%%id%%">
                                                            <div class="remove_resume_text">Remove Resum&eacute;</div>
                                                        </div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div id="cl_resume_error_%%id%%" class="cl_resume_error_div">
                                                        <div id="cover_letter_error_%%id%%" class="error_text cover_letter_error"></div>
                                                        <div id="resume_error_%%id%%" class="error_text resume_error"></div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div class="salary_request_container">
                                                        <div class="input_label salary_request_label">Salary Requirement</div>
                                                        <div class="salary_input_div">
                                                            <input type="text" value="" name="salary" id="salary_input_%%id%%" class="salary_input">
                                                        </div>
                                                        <div id="salary_error_%%id%%" class="error_text salary_error">Please provide a salary requirement.</div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div class="input_label available_shifts_title">Shifts Available</div>
                                                    
                                                    <div id="available_shifts_error_%%id%%" class="error_text available_shifts_error">Please select your available shifts.</div>
                                                    
                                                    <div id="available_shifts_%%id%%" class="available_shifts">
                                                        <div class="available_shift">
                                                            <!-- <input type="checkbox" id="radio_shift_3_%%id%%" name="shifts[]" value="3" style="display: none;" /> -->
                                                            <img onload="CustomRadioButton.add(this)" offimg="https://cdni.abcmouse.com/home/careers/checkbox_off.jpg" onimg="https://cdni.abcmouse.com/home/careers/checkbox_on.jpg" name="shifts[]" value="3" custominput="customCheckBox" src="https://cdni.abcmouse.com/home/careers/checkbox_off.jpg" class="shift_checkbox" id="shift_3_%%id%%">
                                                            <div class="input_label checkbox_label">M &ndash; F 9:30 AM &ndash; 6:30 PM</div>
                                                        </div>
                                                        <div class="available_shift">
                                                            <!-- <input type="checkbox" id="radio_shift_4_%%id%%" name="shifts[]" value="4" style="display: none;" /> -->
                                                            <img onload="CustomRadioButton.add(this)" offimg="https://cdni.abcmouse.com/home/careers/checkbox_off.jpg" onimg="https://cdni.abcmouse.com/home/careers/checkbox_on.jpg" name="shifts[]" value="4" custominput="customCheckBox" src="https://cdni.abcmouse.com/home/careers/checkbox_off.jpg" class="shift_checkbox" id="shift_4_%%id%%">
                                                            <div class="input_label checkbox_label">M &ndash; F 11:00 AM &ndash; 8:00 PM</div>
                                                        </div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <input type="submit" value="Submit" class="master_submit_input no_shift_required btn btn-submit bm0" id="submit_%%id%%">    
                                                </form>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- template -->
                            <!-- used to create new developers jobs html -->
                            <div class="job-template-animationillustrationgd job">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse-%%department%%-%%id%%"><span class="title">%%title%%</span><span class="icon-down-circled-1 pull-right"></span></a>
                                    </div>
                                    <div id="collapse-%%department%%-%%id%%" class="accordion-body collapse">
                                        <div class="accordion-inner">
                                            <div class="intro job-section">
                                                %%intro_text%%
                                            </div>
                                            <div class="duties job-section">
                                                <h3>Duties:</h3>
                                                %%duties%%
                                            </div>
                                            <div class="qualifications job-section">
                                                <h3>Qualifications:</h3>
                                                %%qualifications%%
                                            </div>

                                            <input type="button" value="Submit Resum&eacute;" name="submit" id="submit_button_%%id%%" class="submit_resume btn btn-submit bm0" />

                                            <div id="resume_form_%%id%%" class="resume_form">
                                                <i title="Close Form" class="close_form_img icon-cancel-circled" id="close_form_%%id%%"></i>
                                                <form enctype="multipart/form-data" onsubmit="return validateCareerForm(%%id%%);" action="php/emailresume.php" method="post" id="form_%%id%%">
                                                    <input type="hidden" value="%%title%%" name="job">
                                                    <input type="hidden" value="%%id%%" name="job_id">
                                                    <input type="hidden" value="%%department%%" name="category">

                                                    <div class="form_top_row">
                                                        <div class="form_top_row_left">
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Name</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="name" id="name_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="name_error_%%id%%" class="error_text form_trl_error">Please enter your name.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Email</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="email" id="email_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                            <div id="email_error_%%id%%" class="error_text form_trl_error">Please enter a valid email address.</div>
                                                            <div class="form_trl_row">
                                                                <div class="input_label form_trl_label">Phone</div>
                                                                <div class="form_trl_input_div">
                                                                    <input type="text" value="" name="phone" id="phone_input_%%id%%" class="form_trl_input">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form_top_row_right">
                                                            <div class="input_label form_trr_label">Best time to be contacted</div>
                                                            <div class="form_dropdown_div">
                                                                <select name="best_time" id="best_name_%%id%%" class="form_dropdown">
                                                                    <option value="morning">Morning</option>
                                                                    <option value="afternoon">Afternoon</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="input_label cover_letter_label">Cover Letter</div>
                                                    <div class="cover_letter_textarea_div">
                                                        <textarea onblur="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" onfocus="ABCmouseUtils.preText(this, 'Type here or upload your cover letter below.');" value="" name="typed_cover_letter" id="cover_letter_textarea_%%id%%" class="cover_letter_textarea" style="color: rgb(102, 102, 102);">Type here or upload your cover letter below.</textarea>
                                                    </div>
                                                    <div class="supported_file_types">
                                                        <span class="bold">Supported file types</span> (.pdf, .txt, .rtf, .doc, .docx, .html, .php, .js, .inc, .css).  File size limit is 2MB.
                                                    </div>
                                                    <div class="cover_letter_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_cover_letter_text">Upload Cover Letter</div>
                                                            </div>
                                                            <div class="fake_input_box fake_cover_letter_box" id="cover_letter_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'coverLetter');" name="cover_letter" class="cover_letter_input file_input" id="cover_letter_input_%%id%%">         
                                                        
                                                        <div onclick="removeFile(this,'coverLetter');" class="remove_cover_letter remove_file btn" id="remove_cover_letter_%%id%%">
                                                            <div class="remove_cover_letter_text">Remove Cover Letter</div>
                                                        </div>
                                                    </div>
                                                    <div class="resume_input_container file_input_container">
                                                        <div class="displayed_div">
                                                            <div class="displayed_file_submit btn">
                                                                <div class="displayed_resume_text">Upload Resum&eacute;</span></div>
                                                            </div>
                                                            <div class="fake_input_box fake_resume_box" id="resume_%%id%%"></div>
                                                        </div>
                                                        <input type="file" onchange="updateFile(this,'resume');" name="resume" class="resume_input file_input" id="resume_input_%%id%%">   

                                                        <div onclick="removeFile(this,'resume');" class="remove_resume remove_file btn" id="remove_resume_%%id%%">
                                                            <div class="remove_resume_text">Remove Resum&eacute;</div>
                                                        </div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div id="cl_resume_error_%%id%%" class="cl_resume_error_div">
                                                        <div id="cover_letter_error_%%id%%" class="error_text cover_letter_error"></div>
                                                        <div id="resume_error_%%id%%" class="error_text resume_error"></div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <div class="portfolio_link_container">
                                                        <div class="input_label portfolio_link_label">Portfolio Link</div>
                                                        <div class="portfolio_input_div">
                                                            <input type="text" value="" name="portfolio_link" id="portafolio_input_%%id%%" class="portfolio_input">
                                                        </div>
                                                        <div id="portafolio_error_%%id%%" class="error_text portafolio_error">Please provide a portfolio link.</div>
                                                    </div>

                                                    <div class="salary_request_container">
                                                        <div class="input_label salary_request_label">Salary Requirement</div>
                                                        <div class="salary_input_div">
                                                            <input type="text" value="" name="salary" id="salary_input_%%id%%" class="salary_input">
                                                        </div>
                                                        <div id="salary_error_%%id%%" class="error_text salary_error">Please provide a salary requirement.</div>
                                                    </div>
                                                    <div class="clear"></div>

                                                    <!-- <div class="master_submit no_shift_required" id="submit_div_%%id%%">
                                                        <div class="master_submit_glare"></div>
                                                        <div class="master_submit_text">Submit</div>
                                                    </div> -->

                                                    <input type="submit" value="Submit" class="master_submit_input no_shift_required btn btn-submit bm0" id="submit_%%id%%">    
                                                </form>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- template -->
                        </div>
                    </div>
                </div>
                <!-- .container --> 
            </div>
            <!-- .light-wrapper -->
            <div class="dark-wrapper"></div>
            <footer class="black-wrapper">
                <div class="container inner">
                    <div class="row">
                        <section class="span3 widget">
                            <h3 class="section-title widget-title"><img src="style/images/logo_w.png" alt=""/></h3>
                            <!-- /.post-list --> 
                        </section>
                        <!-- /.widget -->
                        <section class="span4 widget">
                            <h3 class="section-title widget-title">Company</h3>
                            <a href="about1.html">
                                <h4>Our Mission</h4>
                            <a href="about1.html">
                                <h4>Leadership</h4>
                            <a href="about1.html">
                                <h4>Curriculum Advisory Board</h4>
                            <a href="initiatives.html">
                                <h4>Education Access Initiatives</h4>
                            <a href="abcMouse.html">
                                <h4>Products</h4>
                            <a href="curriculum.html">
                                <h4>Curriculum & Standards</h4>
                            <a href="careers.php">
                                <h4>Careers</h4>
                            <a href="blog.html">
                                <h4>Blog</h4>
                        </section>
                        <!-- /.widget -->
                        <section class="span4 widget">
                        <a href="contact.html"><h3 class="section-title widget-title">Get In Touch</h3>
                        <p>Press</p>
                        <div class="divide10">Company Headquarters<br />
                        101 North Brand<br />
                        Suite 800<br />
                        Glendale, CA 91203<br />
                        <i class="icon-phone contact"></i>(818) 246-2223<br />
                        <i class="icon-mail contact"></i> <a href="first.last@email.com">first.last@email.com</a><br /><br />
                        </div>
                        </section>
                        <!-- /.widget --> 
                    </div>
                    <!-- /.row -->
                    <br><br>
                    <hr />
                    <p class="pull-left">© 2014 Age of Learning. All rights reserved. Terms & Conditions  Privacy Policy</p>
                    <ul class="social pull-right">
                        <li><a href="https://twitter.com/abcmousereviews"><i class="icon-s-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/ABCmouse"><i class="icon-s-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCPvEbO2bI5x1MVLUuRJoZXg"><i class="icon-s-youtube"></i></a></li>
                        <li><a href="https://plus.google.com/105795093633811410021/posts"><i class="icon-s-gplus"></i></a></li>
                    </ul>
                </div>
                <!-- .container --> 
            </footer>
            <!-- /footer --> 
        </div>
        <!--/.body-wrapper--> 
        <script src="style/js/jquery.js"></script> 
        <script src="style/js/bootstrap.min.js"></script> 
        <script src="style/js/twitter-bootstrap-hover-dropdown.min.js"></script> 
        <script src="style/js/jquery.themepunch.plugins.min.js"></script> 
        <script src="style/js/jquery.themepunch.revolution.min.js"></script> 
        <script src="style/js/jquery.themepunch.showbizpro.min.js"></script> 
        <script src="style/js/jquery.isotope.min.js"></script> 
        <script src="style/js/jquery.hoverdir.min.js"></script> 
        <script src="style/js/jquery.slickforms.js"></script> 
        <script src="style/js/jquery.easytabs.min.js"></script> 
        <script src="style/js/jquery.fitvids.js"></script> 
        <script src="style/js/view.min.js?auto"></script> 
        <script src="style/js/abcmouse_utils.js"></script>
        <script src="style/js/custom-radio.js"></script>
        <script src="style/js/careers.js"></script>
        <script src="style/js/scripts.js"></script>
    </body>
</html>