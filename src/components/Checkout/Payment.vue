<template>
    <div id="payment">
        <ul class="payment_methods methods">
            <li class="payment_method_bacs">
                <input type="radio" data-order_button_text="" checked="checked" value="bacs"
                       name="payment_method" class="input-radio" id="payment_method_bacs" v-model="payment.mode">
                <label for="payment_method_bacs">Direct Bank Transfer </label>
                <div class="payment_box payment_method_bacs">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment
                        reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                </div>
            </li>
            <li class="payment_method_cheque">
                <input type="radio" data-order_button_text="" value="cheque" name="payment_method"
                       class="input-radio" id="payment_method_cheque" v-model="payment.mode">
                <label for="payment_method_cheque">Cheque Payment </label>
                <div style="display:none;" class="payment_box payment_method_cheque">
                    <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County,
                        Store Postcode.</p>
                </div>
            </li>
            <li class="payment_method_paypal">
                <input type="radio" data-order_button_text="Proceed to PayPal" value="paypal"
                       name="payment_method" class="input-radio" id="payment_method_paypal" v-model="payment.mode">
                <label for="payment_method_paypal">PayPal <img alt="PayPal Acceptance Mark"
                                                               src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"><a
                        title="What is PayPal?"
                        onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                        class="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is
                    PayPal?</a>
                </label>
                <div style="display:none;" class="payment_box payment_method_paypal">
                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                </div>
            </li>
        </ul>

        <div class="form-row place-order">

            <input type="button" data-value="Place order" @click="submitForm" value="Place order" id="place_order"
                   name="woocommerce_checkout_place_order" class="button alt">
        </div>

        <div class="clear"></div>

    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['payment', 'customer']),
        },
        methods: {
            submitForm() {
                console.log("done");
                const order = {
                    cart: this.$store.state.cart,
                    customer: this.customer,
                    payment: this.payment
                };
                console.log(order)
                this.$store.dispatch('submitCheckout',order);
                alert("order submitted!");
            }
        }
    }
</script>
