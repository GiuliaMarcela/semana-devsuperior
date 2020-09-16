package com.devsuperior.dspesquisa.dto;

import java.io.Serializable;
import java.time.Instant;

import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.entities.enums.Platform;

public class RecordDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private Long id; 
	private Instant moment; 
	private String name; 
	private Integer age; 
	private String gameTitle; 
	private Platform gamePlatform; 
	private String genreName; 
	
	public RecordDTO() {}
	
	public RecordDTO(Record entity) {
		id = entity.getId();
		moment = entity.getMoment();
		name = entity.getName();
		age = entity.getAge();
		gameTitle = entity.getGame().getTitle();
		gamePlatform = entity.getGame().getPlatform();
		genreName = entity.getGame().getGenre().getName();
	}

	public Long getId() {
		return id;
	}

	public Instant getMoment() {
		return moment;
	}

	public String getName() {
		return name;
	}

	public Integer getAge() {
		return age;
	}

	public String getGameTitle() {
		return gameTitle;
	}

	public Platform getGamePlatform() {
		return gamePlatform;
	}

	public String getGenreName() {
		return genreName;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setGameTitle(String gameTitle) {
		this.gameTitle = gameTitle;
	}

	public void setGamePlatform(Platform gamePlatform) {
		this.gamePlatform = gamePlatform;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}
}
