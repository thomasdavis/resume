
The easy way to host your resume is by making a `resume.json` on gist.github.com. 

For example mine can be found at https://gist.github.com/thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105 which then automatically gets hosted at https://registry.jsonresume.org/thomasdavis 

You can just edit your Gist using the online GUI and it should update within less than a minute. 

## But

If you would like to have your `resume.json` in a repository aka like this. 

You can set up a Github Action that automatically updates your gist `resume.json` to match what is in your repo everytime you push. 

If you checkout the `.github/workflows/gist.yml` file you should be able to figure it out with relative ease. Or feel free to ping me an issue. 

The basic steps are 

1) Create a gist called `resume.json` 
2) Create or fork this repo and commit your updated `resume.json` 
3) Create a Personal Github token that has just the `gist` scope 
4) Go to your repository settings, then to the secrets page, and add a new secret called `TOKEN` with the value being from the token you created in 3) 
5) Now simply push to your repo, and your `resume.json` from the repo, will publish and override your gist `resume.json` and thus updating the registry to match

Enjoy!