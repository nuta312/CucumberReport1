@ggg
Feature: Data Table POJO example

  @pojo
  Scenario: FB login
    Given user is on FB page
    And enter following info
      | emailOrPhoneNumber | password   |
      | test@test.com      | QWerty123! |
      | h1@t.com1          | h1@t.com 4 |
      | h1@t.com2          | h1@t.com5  |
      | h1@t.com3          | h1@t.com7  |


    @data
  Scenario: Simple DataTable
    Given Test Test Test
      | test  | HI  | hello  |
      | test1 | HI1 | hello1 |
      | test2 | HI1 | hello1 |
      | test  | HI  | hello  |
      | test1 | HI1 | hello1 |
      | test2 | HI1 | hello1 |