package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestScenarioOutlineSteps {

    @Given("^user enter \"([^\"]*)\" in email input field$")
    public void user_enter_in_email_input_field(String email)  {
        System.out.println(email);
    }

    @Given("^user enter \"([^\"]*)\" in password input field$")
    public void user_enter_in_password_input_field(String password)  {
        System.out.println(password);
    }

    @When("^user click Login button$")
    public void user_click_Login_button()  {
        System.out.println("____________________________________________________________");
        
    }

    @Then("^user should successfully sign in$")
    public void user_should_successfully_sign_in()  {
        
        
    }




}
