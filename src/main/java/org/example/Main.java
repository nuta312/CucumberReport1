package org.example;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws MalformedURLException {


        SafariOptions browserOptions = new SafariOptions();
        browserOptions.setPlatformName("macOS 12");
        browserOptions.setBrowserVersion("16");
        Map<String, Object> sauceOptions = new HashMap<>();
        sauceOptions.put("build", "<your build id>");
        sauceOptions.put("name", "<your test name>");
        sauceOptions.put("screenResolution", "2048x1536");
        browserOptions.setCapability("sauce:options", sauceOptions);

        URL url = new URL("https://oauth-islam.ermekov312-4d59b:2f03d4dd-26c7-4514-8a6c-67dc9e92827f@ondemand.eu-central-1.saucelabs.com:443/wd/hub");
        RemoteWebDriver driver = new RemoteWebDriver(url, browserOptions);


        driver.get("https://qa.imoving.com/");


        Assert.assertTrue(true);

        driver.close();
        driver.quit();





    }
}