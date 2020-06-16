<h1>Test Email</h1>
<p>Sent using the following command: </p>


<code>
    Mail::send('mail.test', [], function ($message) {
        $message->from('support@puttxt.com', 'PutTxt');
        $message->to('abcd@xyz.com');
    });
</code>


<p>Via the terminal:</p>

<code>
    php artisan tinker
</code>
