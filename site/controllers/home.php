<?php

return function($site, $pages, $page) {

$contact = $site->find("contact");

    return array(
        'contact' => $contact,
    );

};

?>