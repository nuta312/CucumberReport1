package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.example.drivers.Driver;
import org.junit.Assert;

public class Test123_steps {

    @Given("^Test$")
    public void test()  {
        Driver.getDriver().get("https://www.youtube.com/");
    }

    @Then("^Hello world$")
    public void hello_world()  {
        Assert.assertTrue(true);
    }
}
