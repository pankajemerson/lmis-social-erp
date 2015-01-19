/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.lmiscore.lims.ui.beans;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;

/**
 *
 * @author PWahane
 */
@Named(value = "sessionMB")
@SessionScoped
public class SessionMB implements Serializable {

    private String testString = "This is a simple protoapp";

    public String getTestString() {
        return testString;
    }

    public void setTestString(String testString) {
        this.testString = testString;
    }

    /**
     * Creates a new instance of SessionMB
     */
    public SessionMB() {
    }

}
