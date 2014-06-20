<?php
	// jobs resource
	$jobs_url = 'http://www.abcmouse.com/xml/aofl_site.php?jobs';

	// get request
	$result = file_get_contents($jobs_url);
	$result = json_decode($result, true);

	if($result) {
		// create jobs groups
		$categories = array();
		
		foreach ($result['jobs'] as $key => $job) {
			$departments = explode(',', $job['departments']);

			foreach ($departments as $department) {

				foreach ($job as $key => $value) {
					$job[$key] =  nl2br($value);
				}
				$categories[$department][] = $job;
			}
		}
		
	}

	//return results
	echo json_encode($categories);
	exit();