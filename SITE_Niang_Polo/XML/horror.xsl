<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

        <xsl:template match="/">
                <html>
                        <link rel="stylesheet" type="text/css" title="main" href="../../Styles/film_style1.css"/>
                        <link rel="stylesheet" type="text/css" title="alternate" href="../../Styles/films_style2.css"/>
                        <body>
                                        <a href="../../index.xhtml">
                                                <h2 id="title"><span id="horror">Horror</span>
                                                        <span id="db">DB</span>
                                                </h2>
                                        </a>
                                <h1><xsl:value-of select="film/title"/></h1>
                                <img id="poster">
                                        <xsl:attribute name="src">Images/<xsl:value-of select="film/title"/>.jpg</xsl:attribute>
                                </img>
                                <p id="director" class="quick-info">Director: <xsl:for-each select="film/director"> 
                                                <span><xsl:value-of select="firstname"/></span>
                                                <xsl:text> </xsl:text>
                                                <span><xsl:value-of select="lastname"/></span>
                                        </xsl:for-each>
                                </p>
                                <p id="release" class="quick-info"><h3>Release:</h3> <xsl:value-of select="film/infos/release"/></p>
                                <p id="language" class="quick-info"><h3>Language:</h3> <xsl:value-of select="film/infos/languages/language"/></p>
                                <p id="synopsis" class="paragraph"><h3>Synopsis:</h3> <xsl:value-of select="film/synopsis"/></p>
                                <p id="more" class="paragraph"><h3>More:</h3> <xsl:value-of select="film/more/significance"/></p>
                                <p id="cast">
                                        <h4>Cast:</h4>
                                        <xsl:for-each select="film/cast/actor">
                                                <p class="actor">
                                                        <span><xsl:value-of select="firstname"/></span>
                                                        <xsl:text> </xsl:text>
                                                        <span><xsl:value-of select="lastname"/></span>
                                                        :
                                                        <xsl:for-each select="roles">
                                                                <p class="role">
                                                                        <span><xsl:value-of select="character"/></span>
                                                                </p>
                                                        </xsl:for-each>
                                                </p>
                                        </xsl:for-each>
                                </p>
                                <xsl:if test="film/more/anecdote">
                                        <p id="anecdote" class="paragraph"><h4>Anecdote:</h4> <xsl:value-of select="film/more/anecdote"/></p>
                                </xsl:if>
                        </body>
                </html>
        </xsl:template>
</xsl:stylesheet>
