# SymfonyVueVuetify
Base Project for symfony5



De nos jours, avec la montée en puissance des frameworks frontaux comme Angular, React et Vue.js, les backends sans tête sont devenus de plus en plus populaires.

Cependant, la création et la maintenance de deux bases de code distinctes (frontend + backend / API) peuvent rapidement devenir un problème.

Grâce au **[Webpack Encore de Symfony](https://symfony.com/doc/current/frontend.html#webpack-encore)**, le regroupement de Vue.js à l’intérieur d’une application Symfony devient un jeu d’enfant. Il offre également de sérieux avantages, par exemple en s’appuyant sur la couche de sécurité de Symfony pour l’authentification et la gestion des sessions.

Je vais vous expliquer étape par étape ci-dessous comment obtenir une application web Symfony + Vue.js + Vuetify tout-en-un.


Installez [Symfony binaire](https://symfony.com/download) ,  puis: [node js ](https://nodejs.org/en/download/)
 
# Create Symfony application in symfony-vuetify directory
$ symfony new --full SymfonyVueVuetify

$ cd SymfonyVueVuetify

# Install PHP dependencies
$ composer require symfony/webpack-encore-bundle"1.11.*"

# Install JS dependencies
$ yarn install



# Ajoutez la ligne suivante dans webpack.config.js:

<pre class="  language-javascript"><code class="  language-javascript">Encore

  <span class="token operator">...</span>

  <span class="token comment">// Enable Vue loader</span>
  <span class="token punctuation">.</span><span class="token function">enableVueLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token operator">...</span>

<span class="token punctuation">;</span></code></pre>

# Exécutez et installez le package

$ yarn add vue vue-loader vue-template-compiler --dev

# Ajoutons maintenant vue-routeur et Vuetify:

$ yarn add vue-router vuetify


# Modifiez assets/app.js  avec le contenu suivant

<pre class="  language-javascript"><code class="  language-javascript"><span class="token keyword">import</span> <span class="token string">'./styles/app.css'</span><span class="token punctuation">;</span>

<span class="token comment">// start the Stimulus application</span>
<span class="token keyword">import</span> <span class="token string">'./bootstrap'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">import</span> vuetify <span class="token keyword">from</span> <span class="token string">'./plugins/vuetify'</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./components/Home'</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> Home<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'home'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'history'</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> <span class="token string">'/app/'</span><span class="token punctuation">,</span>
    routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    vuetify
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre>
# Créez le plugin Vuetify dans :assets/plugins/vuetify.js

<pre class="  language-javascript"><code class="  language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Vuetify <span class="token keyword">from</span> <span class="token string">'vuetify'</span>
<span class="token keyword">import</span> <span class="token string">'vuetify/dist/vuetify.min.css'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuetify<span class="token punctuation">)</span>

<span class="token keyword">const</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span>
    theme<span class="token operator">:</span> <span class="token punctuation">{</span>
        themes<span class="token operator">:</span> <span class="token punctuation">{</span>
            light<span class="token operator">:</span> <span class="token punctuation">{</span>
                primary<span class="token operator">:</span> <span class="token string">'#1565c0'</span><span class="token punctuation">,</span>
                secondary<span class="token operator">:</span> <span class="token string">'#64b5f6'</span><span class="token punctuation">,</span>
                accent<span class="token operator">:</span> <span class="token string">'#78002e'</span><span class="token punctuation">,</span>
                error<span class="token operator">:</span> <span class="token string">'#d50000'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuetify</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span></code></pre>

# Activez les balises de script et de lien d’Encore dans templates/base.html.twig:


<pre class="  language-markup"><code class="  language-markup"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>{% block title %}symfony-vuetify{% endblock %}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        {% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}
        {% endblock %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        {% block body %}{% endblock %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span>
</span></code></pre>

# Créer un VueController dans src/Controller/VueController.php:

<pre class="  language-php"><code class="  language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\</span>Bundle<span class="token punctuation">\</span>FrameworkBundle<span class="token punctuation">\</span>Controller<span class="token punctuation">\</span>AbstractController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>HttpFoundation<span class="token punctuation">\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\</span>Component<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Annotation<span class="token punctuation">\</span>Route</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">VueController</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractController</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**
     * @Route("/app/{route}", requirements={"route"=".*"}, name="vue")
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Response
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'vue/index.html.twig'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token single-quoted-string string">'controller_name'</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token single-quoted-string string">'VueController'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre>

# Et créez le modèle dans templates/vue/index.html.twig:

<pre class="  language-markup"><code class="  language-markup">{% extends 'base.html.twig' %}

{% block body %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-app</span> <span class="token attr-name">v-cloak</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-app-bar</span> <span class="token attr-name">short</span> <span class="token attr-name">app</span> <span class="token punctuation">&gt;</span></span>Symfony + Vuetify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-app-bar</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-main</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-container</span> <span class="token attr-name">fluid</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-container</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-app</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
{% endblock %}
</code></pre>

# Notez l’utilisation de directive, qui nous permet de masquer l’application Vue.js pendant le chargement, à l’aide d’une seule ligne CSS dans assets/styles/app.css:

<pre class="  language-css"><code class="  language-css"><span class="token selector">[v-cloak]</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span></code></pre>

# Enfin, créez le composant Vue.js référencé dans notre routeur, dans assets/components/Hom.vue:

<pre class="  language-markup"><code class="  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-alert</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
    <span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-alert</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'Hello Symfony + Vue.js!'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>

# Pour pouvoir tester votre application localement sans installer de base de données (c’est-à-dire. MySQL ou PostgreSQL), décommentez la variable d’environnement DATABASE_URL pour SQLite dans votre fichier .env et commentez celui de PostgreSQL 

<pre class="  language-bash"><code class="  language-bash"><span class="token assign-left variable">DATABASE_URL</span><span class="token operator">=</span><span class="token string">"sqlite:///%kernel.project_dir%/var/data.db"</span>
<span class="token comment"># DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"</span>
<span class="token comment"># DATABASE_URL="postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=13&amp;charset=utf8"</span></code></pre>

# Exécutez yarn dev, symfony server:start, et ouvrez http://localhost:8000/app: