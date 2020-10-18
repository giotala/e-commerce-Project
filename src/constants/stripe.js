const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_51Hbf1mExXOpK3cOroRBf93d1hh5cRY4zOUKfJppSIYJL90xDAdiIBVdD6uxZAjiEDRleF3W4esAbb3534y2ahYvc00X1LtrIZD'
  : 'pk_test_51Hbf1mExXOpK3cOrJjL5wB2SS6i57ozR5zcOR7qRQq75kmP1Pot2KeipHfH3NcqIadRB86JkS0uaeIgdFxAMBugG00KZk9VLUt';
 
export default STRIPE_PUBLISHABLE;