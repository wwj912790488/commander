package com.arcsoft.commander.domain.security;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

// Generated 2014-5-14 16:32:14 by Hibernate Tools 3.4.0.CR1


/**
 * TblRecource generated by hbm2java
 */
public class Resource implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	
	private String url;
	
	private String title;
	
	private String comment;
	
	private String key;

	@XmlElement
	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@XmlElement
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@XmlElement
	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	
	public String getAuth(){
		return key ;
	}

	
	/**
	 * @return the key
	 */
	@XmlAttribute
	public String getKey() {
		return key;
	}

	
	/**
	 * @param key the key to set
	 */
	public void setKey(String key) {
		this.key = key;
	}
}