package step_defs;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import org.example.POJO.FBLoginPojo;

import java.util.List;

public class TestPojo {

    @Given("^user is on FB page$")
    public void user_is_on_FB_page() {
        System.out.println("Hello");
    }

    @Given("^enter following info$")
    public void enter_following_info(List<FBLoginPojo> fbLoginPojos)  {

        System.out.println(fbLoginPojos.get(2).getEmailOrPhoneNumber());

    }

    @Given("^Test Test Test$")
    public void test_Test_Test(DataTable arg1)  {

        List<List<String>> info = arg1.raw();

        System.out.println(info.get(1).get(1));

    }
}
