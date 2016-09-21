import {Injectable} from '@angular/core';
import {Http, Headers}from '@angular/http';

@Injectable()
export class GitHubService {
	constructor(private http:  Http) {
		// code...
	}

	getRepos(username){
		// let repos = this.http.get('https://api.github.com/users/${username}/repos');
		let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
		return repos;
	}

	getDetails(repo){
		let headers = new Headers()
		headers.append('Accept','application/vnd.github.VERSION.html');
		return this.http.get(`${repo.url}/readme`, { headers: headers });
	}
}

